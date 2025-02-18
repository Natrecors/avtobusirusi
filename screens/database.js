// database.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('users.sqlite');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT);',
      [],
      () => {
        console.log('Table created successfully');
      },
      (tx, error) => {
        console.log('Error while creating table:', error);
      }
    );
  });
};

export const addUser = (name, email, password) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (name, email, password) values (?, ?, ?);',
      [name, email, password],
      () => {
        console.log('User added successfully');
      },
      (tx, error) => {
        console.log('Error while adding user:', error);
      }
    );
  });
};

export const getUsers = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users;',
      [],
      (tx, results) => {
        callback(results.rows._array);
      },
      (tx, error) => {
        console.log('Error while fetching users:', error);
      }
    );
  });
};
