// database.js
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const db = SQLite.openDatabase('user.db');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        password TEXT
      );`,
      [],
      () => {
        console.log('Table created successfully');
      },
      (_, error) => {
        console.log('Error creating table: ', error);
      }
    );
  });
};

export const addUser = (username, email, password) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO user (username, email, password) values (?, ?, ?)',
      [username, email, password],
      (_, result) => {
        console.log('User added successfully: ', result);
      },
      (_, error) => {
        console.log('Error adding user: ', error);
      }
    );
  });
};

export const getUsers = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM user',
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      },
      (_, error) => {
        console.log('Error fetching users: ', error);
      }
    );
  });
};

export const exportDatabase = async () => {
  const dbPath = `${FileSystem.documentDirectory}SQLite/user.db`;
  const destinationUri = `${FileSystem.documentDirectory}user.db`;

  try {
    await FileSystem.copyAsync({
      from: dbPath,
      to: destinationUri,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(destinationUri);
    } else {
      console.log('Sharing is not available on this device');
    }
  } catch (error) {
    console.log('Error exporting database: ', error);
  }
};
