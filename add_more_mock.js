const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
let db = { records: [], appointments: [] };

try {
  db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
} catch (e) {
  console.log("db.json not found, creating from scratch");
}

const doctors = [
  { id: 1, name: '王强', department: '内科', title: '主任医师', avatar: '👨‍⚕️', rating: 4.9, status: '出诊中', experience: '12年' },
  { id: 2, name: '李明', department: '外科', title: '主治医师', avatar: '👨‍⚕️', rating: 4.8, status: '手术中', experience: '8年' },
  { id: 3, name: '赵雪', department: '皮肤科', title: '副主任医师', avatar: '👩‍⚕️', rating: 4.9, status: '休息', experience: '10年' },
  { id: 4, name: '孙伟', department: '骨科', title: '主治医师', avatar: '👨‍⚕️', rating: 4.7, status: '出诊中', experience: '6年' },
  { id: 5, name: '陈娜', department: '异宠专科', title: '主治医师', avatar: '👩‍⚕️', rating: 5.0, status: '出诊中', experience: '9年' },
  { id: 6, name: '周杰', department: '牙科', title: '医师', avatar: '👨‍⚕️', rating: 4.6, status: '休息', experience: '4年' },
  { id: 7, name: '林峰', department: '外科', title: '主任医师', avatar: '👨‍⚕️', rating: 4.9, status: '学术会', experience: '15年' },
  { id: 8, name: '刘婷', department: '眼科', title: '主治医师', avatar: '👩‍⚕️', rating: 4.8, status: '出诊中', experience: '7年' },
  { id: 9, name: '黄磊', department: '内科', title: '医师', avatar: '👨‍⚕️', rating: 4.5, status: '出诊中', experience: '3年' },
  { id: 10, name: '吴凡', department: '急诊科', title: '副主任医师', avatar: '👨‍⚕️', rating: 4.9, status: '急救中', experience: '11年' }
];

const medicines = [
  { id: 1, name: '犬心保 (Heartgard Plus)', category: '驱虫药', stock: 120, unit: '盒', price: 280, status: '充足' },
  { id: 2, name: '拜宠清 (Drontal Plus)', category: '驱虫药', stock: 15, unit: '片', price: 35, status: '紧缺' },
  { id: 3, name: '速诺 (Synulox)', category: '抗生素', stock: 45, unit: '盒', price: 120, status: '充足' },
  { id: 4, name: '莫比新 (Mobise)', category: '消炎药', stock: 8, unit: '瓶', price: 180, status: '缺货告警' },
  { id: 5, name: '狂犬病疫苗 (Rabisin)', category: '疫苗', stock: 200, unit: '支', price: 80, status: '充足' },
  { id: 6, name: '妙三多 (Fel-O-Vax)', category: '疫苗', stock: 110, unit: '支', price: 150, status: '充足' },
  { id: 7, name: '卫佳捌 (Vanguard Plus 5 L4)', category: '疫苗', stock: 90, unit: '支', price: 160, status: '充足' },
  { id: 8, name: '止敏速 (Apoquel)', category: '抗过敏', stock: 25, unit: '瓶', price: 450, status: '充足' },
  { id: 9, name: '耳漂 (Epi-Otic)', category: '洗耳液', stock: 60, unit: '瓶', price: 98, status: '充足' },
  { id: 10, name: '康卫宁 (Convenia)', category: '长效消炎', stock: 12, unit: '瓶', price: 850, status: '紧缺' }
];

const inpatients = [
  { id: 1, petName: '旺财', type: '🐶 犬类', owner: '张伟', room: 'A-101', diagnosis: '细小病毒感染', admissionDate: '2024-03-20', status: '危重', doctorId: 10 },
  { id: 2, petName: '咪咪', type: '🐱 猫咪', owner: '李娜', room: 'B-203', diagnosis: '绝育术后恢复', admissionDate: '2024-03-24', status: '稳定', doctorId: 2 },
  { id: 3, petName: '球球', type: '🦎 异宠', owner: '王强', room: 'C-05', diagnosis: '肠炎', admissionDate: '2024-03-22', status: '观察中', doctorId: 5 }
];

db.doctors = doctors;
db.medicines = medicines;
db.inpatients = inpatients;

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Successfully appended doctors, medicines, and inpatients mock data.');
