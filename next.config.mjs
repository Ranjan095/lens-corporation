/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:"lenscorp.ai"
            }
        ]
    }
};

export default nextConfig;
