export async function rewrites() {
    return [
        {
            source: '/api/:path*', // Matches any URL starting with /api/
            destination: '/api/:path*', // Proxies the request to the actual API route
        },
    ];
}