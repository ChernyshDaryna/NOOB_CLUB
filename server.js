const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// папка с сайтом
app.use(express.static(path.join(__dirname, "public")));

// главная страница
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// админка
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});