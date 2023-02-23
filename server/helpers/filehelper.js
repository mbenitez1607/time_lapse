import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

uuidv4();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const fileName = uuidv4() + '-' + file.originalname
        cb(null, fileName);
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});

export default upload
