module.exports = {
    "provider": "cloudinary",
    "providerOptions": {
        "cloud_name": "detour-digital",
        "api_key": process.env.CLOUDINARY_API_KEY,
        "api_secret": process.env.CLOUDINARY_SECRET
    }
};