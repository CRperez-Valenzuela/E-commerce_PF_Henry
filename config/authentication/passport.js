/*const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const { User } = require('../models'); // Asegúrate de que la ruta a tu modelo de usuario sea correcta

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { googleId: profile.id } });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        username: profile.displayName
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}
));

/*passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/api/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'emails']
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { facebookId: profile.id } });
    if (!user) {
      user = await User.create({
        facebookId: profile.id,
        email: profile.emails[0].value,
        username: profile.displayName
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}
));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/api/auth/github/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { githubId: profile.id } });
    if (!user) {
      user = await User.create({
        githubId: profile.id,
        email: profile.emails[0].value,
        username: profile.displayName
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
}
));*/

/*passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;*/