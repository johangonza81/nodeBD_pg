import  'dotenv/config';

import pkg from 'pg';
const {Pool} = pkg;


const config = {
    
user:"postgres",
host:"localhost",
database:"likeme",
password:"JOHAN230581",
port:5432
}


const pool = new Pool(config)

export default pool;