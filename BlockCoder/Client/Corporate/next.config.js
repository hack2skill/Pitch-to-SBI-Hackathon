/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    module: {
        rules: [
          // ... Other rules
          {
            test: /\.pdf$/, // Match PDF files
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]', // Output file name and extension
                },
              },
            ],
          },
        ],
      },
}
