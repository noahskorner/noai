/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    // TODO: Dynamically get the bearer token for requests to openai
    return [
      {
        source: '/openai/:path*',
        headers: [
          {
            key: 'Authorization',
            value: 'Bearer ollama',
          },
        ],
      },
    ];
  },
  async rewrites() {
    // TODO: Dynamically get the url from supabase
    return [
      {
        source: '/openai/:path*',
        destination: 'http://localhost:11434/:path*',
      },
    ];
  },
};
