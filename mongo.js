const mongoose = require("mongoose");

main().then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/test");
}

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
// });

// const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: "Sanju",
//     email: "sanju@gmail.com",
//     age: 20,
// });

// user1.save();

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    rating: Number,
    category: String,
});

const Product = mongoose.model("Product", productSchema);

const product1 = new Product({
    name: "Laptop",
    price: 1000,
    description: "A laptop",
    rating: 4.5,
    category: "Electronics",
});

product1.save();