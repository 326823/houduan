// Using native fetch (Node 18+)

const BASE_URL = 'https://houduan-hlb1.onrender.com';
const COLLECTIONS = [
    'records',           // 宠物档案
    'medical_records',   // SOAP 病历
    'appointments',      // 预约挂号
    'lab_results',       // 化验单
    'imaging_studies',   // 影像报告
    'users'              // 用户账号 (注意：这会删除非管理员账号)
];

async function purgeCollection(name) {
    console.log(`🧹 正在清理集合: ${name}...`);
    try {
        const res = await fetch(`${BASE_URL}/${name}`);
        const items = await res.json();
        
        console.log(`找到 ${items.length} 条记录，开始删除...`);
        for (const item of items) {
            // 保留管理员账号 (假设管理员 ID 为 1)
            if (name === 'users' && item.id === 1) continue;
            
            await fetch(`${BASE_URL}/${name}/${item.id}`, { method: 'DELETE' });
        }
        console.log(`✅ ${name} 清理完成！`);
    } catch (err) {
        console.error(`❌ 清理 ${name} 失败:`, err.message);
    }
}

async function run() {
    console.log('🚀 开始远程服务器数据清洗任务...');
    for (const collection of COLLECTIONS) {
        await purgeCollection(collection);
    }
    console.log('\n✨ 服务器已恢复初始纯净状态！');
}

run();
