const cloudinary = require('cloudinary').v2
require('dotenv').config()
exports.cloudinaryConnect=()=>{
    try {
        // cloud_name,api_key,api_secret_key
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
        console.log("cloudinary connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}