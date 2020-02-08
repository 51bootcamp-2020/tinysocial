const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',
});

module.exports.imageUpload = async (file) => {
  const {createReadStream, filename} = await file;
  const fileStream = await createReadStream();

  const uploadParams = {
    Bucket: 'tinysocial.seongjae.test',
    Key: filename,
    ACL: 'public-read',
    Body: fileStream,
  };

  await s3.upload(uploadParams, function(err, data) {
    return data.Location;
  });

};


