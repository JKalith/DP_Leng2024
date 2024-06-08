/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        //connectionString: "mongodb://localhost/next-js-registration-login-example",
        connectionString: "mongodb+srv://kevinsibajah:kevin123@cluster1.mg5klla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://dp-leng2024.vercel.app/api' // production api
    }
}

module.exports = nextConfig





