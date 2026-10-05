"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
const path = require("path");
// บังคับใช้ Google Public DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = Express();
app.use(Express.json());
app.use(cors());
// ให้ Express ให้บริการไฟล์ static (Frontend) จากโฟลเดอร์ public
app.use(Express.static(path.join(__dirname, "../public")));
app.use("/api", UserRoutes_1.default);
mongoose.connect("mongodb+srv://nongjeffy7849_db_user:12345@cluster0.jhilaza.mongodb.net/")
    .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
