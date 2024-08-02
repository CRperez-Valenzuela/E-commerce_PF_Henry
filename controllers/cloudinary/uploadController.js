const { cloudinary } = require('../cloudinary/cloudinaryConfig');

exports.uploadImage = async (req, res) => {
  try {
    const imageUrl = req.file.path;
    res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error });
  }
};