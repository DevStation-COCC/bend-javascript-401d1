'use strict';

import express from 'express';
import multer from 'multer';

import auth from '../auth/middleware.js';
import s3 from '../lib/s3';

const uploadRouter = express.Router();

const upload = multer({dest: `${__dirname}/../../tmp/`});

uploadRouter.post('/upload', auth, upload.any(), (req, res, next) => {
  console.log(req.files);

  if(!req.files.length){
    return next('Invalid File Upload');
  }

  let file = req.files[0];
  let key = `${file.filename}.${file.originalname}`;

  s3.upload(file.path, key)
    .then(url => {
      res.send({url: url});
    })
    .catch(next);
});

export default uploadRouter;