module.exports = {
  images: {
    domains: ["picsum.photos"],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=120, must-revalidate',
          }
        ],
      },
    ]
  },
};

