var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Yay!');
    }, 100);
});

p.then(function (msg) {
    console.log(msg);   // Yay!
});