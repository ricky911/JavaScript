var bday = 60;

function daysUntilBday() {
    while(bday > 0) {
        if(bday > 30){
            console.log(bday + ' until my bday. ugh');
            bday--;
        }if (bday < 5) {
            console.log(bday + ' until my bday. almost there!');
            bday--;
        }
    }
}
daysUntilBday();