/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "travio.smartdemowp.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "travosy.vercel.app",
        port: "",
      },
    ],
  },
};

export default nextConfig;
