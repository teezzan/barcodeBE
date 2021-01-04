const { findAllPackage, removePackage, updatePackage } = require("./database/db-func");
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python', ["usb/usb.py"]);

pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    let code = data.toString();
    let splitPayload = code.split('*');
    if (splitPayload.length != 3) {
        console.log('Location')
    }
    else {
        console.log('Product')
    }


});


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
