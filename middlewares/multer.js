const multer = require('multer')

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    console.log("multer", file.originalname, new Date())
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const uploadAny = multer({
  storage: storage
})

const uploadSingle = multer({
  storage: storage
})

module.exports = { uploadAny, uploadSingle }