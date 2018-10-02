'use strict';

import fs from 'fs-extra';
import aws from 'aws-sdk';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const upload = (filepath, key) => {
  let config = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    Body: fs.createReadStream(filepath),
  };

  return s3.upload(config)
    .promise()
    .then(res => {
      console.log('URL:', res.Location);
      return fs.remove(filepath)
        .then(() => res.Location);
    })
    .catch(err => {
      console.error('ERROR!!!:', err);
      return fs.remove(filepath)
        .then(() => Promise.reject(err));
    });
};

export default {upload};