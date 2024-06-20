import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_BUCKET_NAME}.amazon.com`,
      },
    ],
  },
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  }
}

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

export default withPWAConfig(nextConfig)
