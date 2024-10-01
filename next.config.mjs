/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com', // ** libera todas as fontes de imagens
            },
        ],
    },
}

export default nextConfig
