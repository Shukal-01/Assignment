/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add styles configuration
    styles: {
        // Enable CSS modules
        modules: true,
        // Add global CSS file
        globals: './styles/globals.css',
    },

    // Add rewrites configuration
    async rewrites() {
        return [
            {
                source: '/api/:path*', // Matches any URL starting with /api/
                destination: '/api/:path*', // Proxies the request to the actual API route
            },
        ];
    },
};

export default nextConfig;