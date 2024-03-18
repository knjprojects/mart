/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ytimg.com', 
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'images.google.com', // Empty string allows all domains
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      
      ],
       // domains: ['lh3.googleusercontent.com','images.google.com','google.com','i.ytimg.com'], // Add your domain here
      },
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'http://localhost:3000',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
