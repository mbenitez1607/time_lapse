
const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, getallSingleFiles, deleteFile} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.delete('/deleteFile/:id', deleteFile);


module.exports = {
    routes: router
}