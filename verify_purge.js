async function verify() {
    try {
        const res = await fetch('https://houduan-hlb1.onrender.com/records');
        const data = await res.json();
        console.log(`CURRENT_RECORDS_COUNT: ${data.length}`);
    } catch (err) {
        console.error('ERROR:', err.message);
    }
}
verify();
