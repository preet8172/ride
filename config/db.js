const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI?.trim();

        if (!mongoUri || !/^mongodb(\+srv)?:\/\//i.test(mongoUri)) {
            throw new Error(
                "MONGO_URI must be a MongoDB connection string starting with mongodb:// or mongodb+srv://. Update it in your .env file."
            );
        }

        await mongoose.connect(mongoUri);
        console.log("MongoDB is connected");
    }catch (e) {
        console.error("MongoDB Error:", e.message);
        process.exit(1);
    }
};

module.exports = ConnectDB;