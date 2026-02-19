import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new sqlite3.Database(join(__dirname, 'novadent.db'));

export const initDatabase = () => {
  db.serialize(() => {
    // Create users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'patient',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create appointments table
    db.run(`
      CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        full_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        service TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        notes TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    // Create default admin user if not exists
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    
    db.get(`SELECT * FROM users WHERE email = 'admin@novadent.com'`, (err, row) => {
      if (!row) {
        db.run(
          `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
          ['Admin', 'admin@novadent.com', hashedPassword, 'admin']
        );
        console.log('Default admin user created');
      }
    });
  });
};

export default db;
