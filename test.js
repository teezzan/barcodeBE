let usb = require('usb')
function connectdevice(vID, pId) {
    var device = usb.findByIds(vID, pId);
    device.open();
    var deviceINTF = device.interface(0);

    if (deviceINTF.isKernelDriverActive())
        deviceINTF.detachKernelDriver();
    deviceINTF.claim();


    var ePs = deviceINTF.endpoints;
    var epIN;
    $.each(ePs, function (index, ep) {
        if (ep.direction == "in") {
            epIN = ep;
        }
    });
    if (epIN) {
        epIN.on('data', function (data) {
            alert("1" + data);
        });
        epIN.transferType = 2;
        alert("non empty port : " + epIN);
        epIN.transfer(64, function (error, data) {
            console.log(error, data);
        });
        alert("after transfer");
    } else {
        alert("unable to read ..");
    }
}
connectdevice(325, 18)