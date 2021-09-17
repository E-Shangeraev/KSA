const uploadFeature = require('@adminjs/upload')
require('dotenv').config()

const region = process.env.AWSRegion
const bucket = process.env.AWSBucket
const secretAccessKey = process.env.AWSSecretAccessKey
const accessKeyId = process.env.AWSAccessKeyID

const features = [
  uploadFeature({
    provider: {
      aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
    },
    properties: {
      filename: 'uploadedFile.filename',
      file: 'uploadedFile',
      key: 'uploadedFile.path',
      bucket: 'uploadedFile.folder',
      size: 'uploadedFile.size',
      mimeType: 'mimeType',
    },
    validation: {
      mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    },
  }),
]

module.exports = features
