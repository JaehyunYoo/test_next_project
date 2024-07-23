/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config,option) => {
        config.cache = false;
        return config
    }
};

export default nextConfig;
