const express = require("express");
const connectToDatabase = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
connectToDatabase();

app.use('/api/auth', require("./routes/userRoutes"))

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Kailash Shrestha")
})
