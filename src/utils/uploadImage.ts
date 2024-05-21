import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export const s3 = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

export async function uploadImage(
  file: File,
  fileName: string,
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: file,
    ContentType: file.type,
  })

  try {
    await s3.send(command)
    return `https://${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_S3_BUCKET_NAME}/${fileName}`
  } catch (error) {
    throw error
  }
}
