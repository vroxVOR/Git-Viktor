
function FIB(n) {
    for (let i = 0; i <= n; i++) {
        let f = 0;
        let ff = 1;
        let FIBB = f + ff;
        console.log(FIBB)
        f = ff;
        ff = FIBB;
    }
}

FIB(2)