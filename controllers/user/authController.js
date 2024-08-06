const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Iniciar sesión
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};

// Registrar
exports.register = async (req, res) => {
    try {
        const { username, email, password, isAdmin } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, email, password: hashedPassword, isAdmin });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

// Verificar token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded;
        next();
    });
};
// Autenticación con Google
exports.googleAuth = async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const { sub, email, name, picture } = payload;

        let user = await User.findOne({ where: { email } });

        if (!user) {
            user = await User.create({ username: name, email, password: '', isAdmin: false, profilePicture: picture });
        }

        const jwtToken = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token: jwtToken });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};