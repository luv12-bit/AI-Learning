import multer from "multer";

// Use memoryStorage so uploaded files are in req.file.buffer (not written to disk).
// Render has an ephemeral filesystem — any files written to disk are lost on restart.
// We store the PDF binary directly in MongoDB instead.
const storage = multer.memoryStorage();

// File filter — only PDFs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10485760
    }
});

export default upload;