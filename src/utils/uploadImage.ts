import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
})

export async function uploadImage(file: File | null): Promise<string> {
  if (file === null) {
    return ''
  }

  const splitFilename = file!.name.split('.')
  const filename = `${splitFilename[0]}${Date.now()}.${splitFilename.pop()}`

  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    Key: `profileImage/${filename}`,
    Body: file,
    ContentType: file.type,
  })

  try {
    await s3.send(command)
    return `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/profileImage/${filename}`
  } catch (error) {
    throw error
  }
}
