const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. 清理患者档案
db.records = [];

// 2. 清理医疗文书 (SOAP)
db.medical_records = [];

// 3. 清理化验报告
db.diagnostic_tests = [];

// 4. 清理影像报告 (PACS)
db.imaging_studies = [];

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('✅ 项目历史模拟数据已清理，HIS 系统已重置为初始状态。');
