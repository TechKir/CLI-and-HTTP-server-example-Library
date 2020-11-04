const path = require('path');
const fs = require('fs')

const pathToLogs = path.resolve(path.join(__dirname,'../assets/logs.json'))

module.exports = ()=>{

    fs.watchFile(pathToLogs, () => {
        const allLogs = fs.readFileSync(pathToLogs,'utf-8').toString().split('\n');
        console.log(allLogs.reverse()[0])
    })
}


