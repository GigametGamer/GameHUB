// require("dotenv").config();
// const mysql = require("mysql2");

import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const conexao = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME || "gamehub_db",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234"
});

export default conexao;