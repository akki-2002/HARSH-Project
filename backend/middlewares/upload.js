const multer = require('multer');
const path = require('path');

// Set storage engine
let storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb)=>{
      // cb(null, Date.now(+file+originalname))
      cb(null, file.originalname)
  }
})

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit to 10MB per file
}).array('productImages', 10); // Allow up to 10 images

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload;