const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
let db = {};
try {
  db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
} catch (e) {
  console.log("Error reading db.json", e);
}

if (!db.users) {
  db.users = [
    { id: 1, username: 'admin', password: '123', name: '超级管理员', role: '系统管理员' },
    { id: 2, username: 'doctor1', password: '123', name: '李时珍', role: '主治医生' },
    { id: 3, username: 'front1', password: '123', name: '小张', role: '前台导诊' },
    { id: 4, username: 'nurse1', password: '123', name: '王护士', role: '护士' }
  ];
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  console.log('Added "users" table to db.json');
} else {
  console.log('"users" table already exists.');
}
