var q = 50;
var r = Math.floor(Math.random() * 100);
         
//console.log(r);
function slots(x) {
    while (q > 0) {
        if (r === x) {
            q += r;
            return q;
        } else {
        q--;
        console.log(q);
        }
    };
};
slots(r);
