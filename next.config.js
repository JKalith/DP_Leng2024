/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        //connectionString: "mongodb://localhost/next-js-registration-login-example",
        connectionString: "mongodb+srv://jkalith:patitopelon2024@cluster0.9z8ba2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://dp-leng2024.vercel.app/api' // production api
    }
}

module.exports = nextConfig





