const fs = require('fs');
const mot = process.argv[2];
const fichier = process.argv[3];

let mot_decompose = mot.split('').sort();

fs.readFile(fichier, 'utf8', function(err, fichier1) {
    let fr = fichier1.split("\n")
    fr.forEach(element => {
        let temp = element.split('').sort();
        let trouve = 0;
        temp.forEach((element1,key) => {
            if (element1 == mot_decompose[key]) {
                trouve++;
                if(trouve == mot_decompose.length){
                    console.log(element)
                }
            } 
        });
    });
});