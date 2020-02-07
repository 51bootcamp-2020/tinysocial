const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',
});

module.exports.imageUpload = async (file) => {
  const {createReadStream, filename, mimetype} = await file;
  const fileStream = await createReadStream();
  console.log('파일스트림', fileStream);

  const uploadParams = {
    Bucket: 'tinysocial.seongjae.test',
    Key: filename,
    ACL: 'public-read',
    Body: fileStream,
  };

  const result = await s3.upload(uploadParams, function(err, data) {
    console.log(err, data.Location);
  });

  console.log(result);
};


