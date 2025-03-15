/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;
