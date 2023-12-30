import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

// Storage configuration for multer
const __dirname = path.resolve();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadPath = path.join(__dirname, "/frontend/public/images/");
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
// Function to check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|webp/;
  const mimetypes = /image\/jpeg|image\/jpg|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Images only!"), false);
  }
}

// Configure multer
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// POST route for image upload
router.post("/", upload.single("image"), (req, res) => {
  if (req.file) {
    // Convert absolute file path to relative URL path
    let filePath = req.file.path;
    const baseUrl = path.join(__dirname, "/frontend/public/");
    const relativePath = filePath.replace(baseUrl, "/").replace(/\\/g, "/");

    res.status(200).send({
      message: "Image uploaded successfully",
      image: relativePath, // This will be something like '/images/image-name.jpg'
    });
  } else {
    res.status(400).send({ message: "No file uploaded" });
  }
});

export default router;
