'use strict';

import express from 'express';
import multer from 'multer';

import auth from '../auth/middleware.js';
import s3 from '../lib/s3.js';

const uploadRouter = express.Router();

const upload = multer({dest:`${__dirname}/../../tmp`});

uploadRouter.post('/upload', auth, upload.any(), (req,res,next) => {

  if(! req.files.length) {
    return next('Invalid File Upload');
  }

  let file = req.files[0];
  let key = `${file.filename}.${file.originalname}`;

  // Offload the actual uploading to a module designed to interface with S3
  s3.upload(file.path, key)
    .then(url => {
      // This could put a record into a mongo collection with the
      // image and connect it to a user account
      let output = {
        url: url,
      };
      res.send(output);
    })
    .catch(next);
});

export default uploadRouter;