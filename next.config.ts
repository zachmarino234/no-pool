/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow embedding only on your specific CRM domain
          { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://www.zmarino.com" },
        ],
      },
    ];
  },
};
export default nextConfig;
