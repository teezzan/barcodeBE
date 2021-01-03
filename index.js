// const { findAllPackage, removePackage, updatePackage } = require("./database/db-func");

// updatePackage('A', 'B', 'C1', 'D11').then(x => console.log(x))
//     .then(() => {
//         findAllPackage()
//             .then(documents => {
//                 console.log(documents)
//             })
//             .then(() => {
//                 updatePackage('A1', 'B', 'C1', 'D1').then(x => console.log(x))
//                     .then(() => {
//                         removePackage('A1', 'B', 'C1', 'D1').then(x => console.log(x))
//                     })
//             })
//     })


async function printInput() {
    const streamReadAll = require('stream-read-all')
    console.log('reading');
    const stdin = await streamReadAll(process.stdin)
    let input = stdin.toString();
    if (input.indexOf('X') !== 0)
        console.log('contains X')
}