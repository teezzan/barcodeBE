

const { findAllPackage, removePackage, updatePackage, findPackagesLocation } = require("./database/db-func");



updatePackage('A11', 'B321', 'C12', 'gal_Gadot')
    .then(() => {
        findAllPackage('A11', 'B321', 'C12')
            .then(documents => {
                console.table(documents)
                findPackagesLocation("gal_Gadot")
                    .then(documents => {
                        console.table(documents)
                    })
            })
    })
