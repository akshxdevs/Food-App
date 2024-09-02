"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_1 = require("./routes/user");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/api", user_1.router);
mongoose_1.default.connect('mongodb+srv://monkeyslapzx:akash123@cluster0.ewzdfcp.mongodb.net/', { dbName: "user-foodapp" // Specify the database name here
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
