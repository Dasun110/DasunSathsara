/** @type {import('next').NextConfig} */

const isProd =process.env.NODE_ENV ='production';

const nextConfig = {
  basePath:isProd? '/DasunSathsara':'',
  output:'export',
  reactStrictMode: true,
  distDir:'dist',
  images:{
    unoptimized:true,
  }

};

export default nextConfig;
