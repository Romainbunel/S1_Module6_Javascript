const fs = require('fs');
const C1 = process.argv[2];
const C2 = process.argv[3];

let c1 = []; 
let c2 = []; 

fs.readFile(C1, 'utf8', function(err, fichier1) {
    
    c1 = fichier1.split("\n");
    c1.forEach((element,key) => {
        c1[key] = element.split("");
    });

    fs.readFile(C2, 'utf8', function(err, fichier2) {
        
        c2 = fichier2.split("\n");
        c2.forEach((element,key) => {
            c2[key] = element.split("");
        });
        
        let trouve = 0;
        let res = "Rien trouvé."
        for (let i = 0; i < c2.length; i++) {
            for (let j = 0; j < c2[i].length; j++) {
                if (c2[i][j] == c1[0][0] && trouve == 0) {
                    
                    for (let k = 0; k < c1.length; k++) {
                        for (let l = 0; l < c1[k].length; l++) {
                            if (c1[k][l] == c2[i+k][j+l]) {
                                trouve++;
                            }
                        }
                    }
                    if(trouve > 0){
                        res = j + "," + i;
                        console.log(res);
                    }

                }

            }
        }
    });
});
