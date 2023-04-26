import app from './app.js';
import db from './src/database/database.js';

let alter;
const IS_DEV = process.env.IS_DEV;
const PORT = 3333;

if (IS_DEV) {
    alter = true;
};

try {
    await db.sync({ alter: alter });
    console.log('Connected to database.');

    app.listen(PORT, console.log(`Server started in port ${PORT}`));
} catch (error) {
    console.log('Error connecting to database: ', error);
    process.exit(1);
};