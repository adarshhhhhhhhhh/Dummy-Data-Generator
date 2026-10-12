import express from "express";
import mongoose from "mongoose";
import { Employee } from "./Employee.js";

const app = express();
app.use(express.static("."));
const PORT = 3000;

await mongoose.connect("mongodb://127.0.0.1:27017/company");
console.log("Connected to mongoose")


app.post("/generate-data", async (req, res) => {
    await Employee.deleteMany({});

    const names = ["Adarsh", "Aman", "Aarish", "Insha", "Tanya"];
    const cities = ["New york", "New Delhi", "Jamshedpur", "Tokyo", "Saharsa"];
    const languages = ["Python", "C++", "JavaScript", "Typescript", "C#"];

    const randomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    const employees = [];

    for (let i = 0; i < 10; i++) {
        employees.push({
            name: randomItem(names),
            salary: Math.floor(Math.random() * 8000001) + 2000000,
            language: randomItem(languages),
            city: randomItem(cities),
            isManager: Math.random() < 0.5
        });
    }

    await Employee.insertMany(employees);

    res.send("10 randoms employee records generated")
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});