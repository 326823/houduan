const fs = require('fs');

const firstNames = ['伟', '强', '磊', '洋', '勇', '军', '杰', '涛', '超', '明', '刚', '平', '辉', '建', '波', '鹏', '华', '飞', '鑫', '波', '浩', '欣', '丽', '芳', '艳', '玲', '霞', '静', '敏', '燕', '娟', '梅', '萍', '兰', '凤'];
const lastNames = ['张', '王', '李', '赵', '陈', '刘', '杨', '黄', '吴', '周', '徐', '孙', '马', '朱', '胡', '郭', '林', '何', '高', '梁', '郑', '罗', '宋', '谢', '唐'];
const petNames = ['旺财', '咪咪', '球球', '豆豆', '大黄', '奥利奥', '年糕', '小黑', '小白', '招财', '皮皮', '布丁', '奶茶', '果果', '毛毛', '多多', '胖虎', '可乐', '雪球', '煤球', '珍珠', '蛋黄', '肉包', '糯米', '汤圆'];
const types = ['🐶 犬类', '🐱 猫咪', '🦎 异宠', '🕊️ 鸟类', '🐹 仓鼠'];
const statuses = ['治疗中', '观察中', '已康复'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhone() {
  return `13${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 89999999 + 10000000)}`.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
}

function generateDate() {
  const date = new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000);
  return date.toISOString().slice(0, 16).replace('T', ' ');
}

const records = [];
for (let i = 1; i <= 50; i++) {
  records.push({
    id: i,
    petName: getRandomItem(petNames) + (Math.random() > 0.7 ? ' ' + i : ''),
    ownerName: getRandomItem(lastNames) + getRandomItem(firstNames),
    phone: generatePhone(),
    type: getRandomItem(types),
    status: getRandomItem(statuses),
    lastVisit: generateDate()
  });
}

const appointments = [
  { id: 101, time: '09:00 AM', pet: '珍珠', owner: '刘小姐', doctor: '王医生', reason: '年度常规体检', status: 'DONE' },
  { id: 102, time: '10:30 AM', pet: '可乐', owner: '孙先生', doctor: '李医生', reason: '食欲不振，呕吐', status: 'DOING', isUrgent: true },
  { id: 103, time: '13:00 PM', pet: '棉花糖', owner: '陈女士', doctor: '王医生', reason: '毛发检查', status: 'TODO' },
];

const db = { records, appointments };

fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('Successfully generated db.json with 50 mock pet records!');
