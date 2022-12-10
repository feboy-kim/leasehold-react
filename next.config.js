/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mainTitle: '租约帮' // or 租约助手 or 租房签约助手
  }
}

module.exports = nextConfig
