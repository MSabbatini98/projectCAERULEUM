// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '127.0.0.1', 
  user: 'admin', 
  password: '12345',
  database: 'stage', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export interface ProjectInterface {
    id: number;                 
    title: string;              
    description: string;       
    short_description: string;  
    img_main: string;           
    img_secondary: string;     
    size: string;        
    author: string;             
    cta_link: string;           
    cta_text: string;         
  }

export default pool;