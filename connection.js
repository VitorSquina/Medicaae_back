import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    database: 'medicaae',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
});

export default pool;