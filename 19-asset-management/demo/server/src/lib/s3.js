'use strict';

import fs from 'fs-extra';
import aws from 'aws-sdk';

const s3 = new aws.S3();

const upload = (filePath, key) => {

  let config = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fs.createReadStream(filePath),
  };

  return s3.upload(config)
    .promise()
    .then(res => {
      console.log('URL:', res.Location);
      return fs.remove(filePath)
        .then( () => res.Location);
    })
    .catch(err => {
      console.error('ERROR!', err);
      return fs.remove(filePath)
        .then( () => Promise.reject(err) );
    });
  
};

export default {upload};
