'use server'

import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function uploadProfileImage(file: File | null): Promise<string> {
  if (file === null) {
    return ''
  }

  const splitFilename = file!.name.split('.')
  const filename = `${splitFilename[0]}${Date.now()}.${splitFilename.pop()}`

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `profileImage/${filename}`,
    Body: file,
    ContentType: file.type,
  })

  try {
    await s3.send(command)
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/profileImage/${filename}`
  } catch (error) {
    throw error
  }
}

export async function uploadGoodsImage(file: File | null): Promise<string> {
  if (file === null) {
    return ''
  }

  const splitFilename = file!.name.split('.')
  const filename = `${splitFilename[0]}${Date.now()}.${splitFilename.pop()}`

  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    Key: `productImage/${filename}`,
    Body: file,
    ContentType: file.type,
  })

  try {
    await s3.send(command)
    return `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/goodsImage/${filename}`
  } catch (error) {
    throw error
  }
}

export async function deleteProfileImage(imageUrl: string): Promise<void> {
  const filename = imageUrl.split('/').pop()!

  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: `profileImage/${filename}`,
  })

  try {
    await s3.send(command)
  } catch (error) {
    throw error
  }
}
