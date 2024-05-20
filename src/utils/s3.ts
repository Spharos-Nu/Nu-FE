import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

export const s3 = new AWS.S3()

export async function uploadToS3(file: File, fileName: string) {
  const params = {
    Bucket: 'your-s3-bucket-name', // 버켓 이름
    Key: fileName,
    Body: file,
    ContentType: file.type,
  }

  try {
    const { Location } = await s3.upload(params).promise()
    return Location
  } catch (error) {
    throw error
  }
}
