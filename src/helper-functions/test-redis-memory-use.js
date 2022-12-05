const Redis = require("ioredis");
const redis = new Redis();

const useHash = true;
async function testProgram() {
    console.log(process.memoryUsage.rss());
    for (let i=100000; i<900000; i++) {
        const id = i.toString();
        if (useHash) {
            await redis.hmset('idHash', {
                [`${id}`]: 'Authing'
            });
        } else {
            await redis.set(id, 'Authing');
        }
    }
    console.log('DONE');
    console.log(process.memoryUsage.rss());
    return;
}

testProgram();