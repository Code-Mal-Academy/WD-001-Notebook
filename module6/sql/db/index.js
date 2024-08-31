// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'tom',
    password: '123456',
    database: 'codeMal',
    port: 3306,

});

// // A simple SELECT query
// try {
//     const [results, fields] = await connection.query(
//         'SELECT * FROM Users'
//     );

//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//     console.log(err);
// }

// Using placeholders
try {
    const [results] = await connection.query(
        'SELECT * FROM Users WHERE `id` = ?',
        [1]
    );

    console.log(results);
} catch (err) {
    console.log(err);
}