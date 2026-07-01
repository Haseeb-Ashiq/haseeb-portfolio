import express from 'express';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'; // 1. Import this built-in tool

// 2. Recreate __filename and __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app= express();
app.use(cors({
    origin:"*",
    methods:"PUT,DELETE,POST,GET,PATCH"
}))
app.use("/", express.static(path.join(__dirname, "dist")));
app.use(express.static("dist"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen('5000',()=>console.log('server started at 5000'))