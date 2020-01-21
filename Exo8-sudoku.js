const fs = require('fs');
const fichier = process.argv[2];
let sudoku = [];
fs.readFile(fichier, 'utf8', function(err, fichier1) {
    Object.assign(sudoku,fichier1.split("\n"))
    
    sudoku.forEach((element,key) => {
        sudoku[key] = element.replace("|","");
        sudoku[key] = sudoku[key].replace("|","");
        sudoku[key] = sudoku[key].split('');
        sudoku[key].forEach((nombre,key1) => {
            if(nombre == "_"){
                sudoku[key][key1] = 0;
            } else {
                sudoku[key][key1] = parseInt(sudoku[key][key1], 10);
            }
        });
    });
    sudoku.splice(3,1);
    sudoku.splice(6,1);
    /*
    ######################################
    ######  Programme principal  #########
    ######################################
    */

    resoudre(sudoku);

});

/*
######################################
######        FONCTIONS      #########
######################################
*/

function verifLigne(tableau, numLig){
    const ok = [1,2,3,4,5,6,7,8,9];
    let tab = [];
    Object.assign(tab, tableau[numLig])
    let ligne_trie = tab.sort();
    let valide = true;
    for (let i = 0; i < 9; i++) {
        if(ligne_trie[i] != ok[i]){
            valide = false;
        }
    }
    return valide;
}


function verifColonne(tableau, numCol){
    const ok = [1,2,3,4,5,6,7,8,9];
    let tab = [];
    Object.assign(tab, tableau)
    let colonne = [];

    for (let i = 0; i < 9; i++) {
        colonne.push(tab[i][numCol]);
    }

    let valide = true;
    let colonne_trie = colonne.sort();
    for (let i = 0; i < 9; i++) {
        if(colonne_trie[i] != ok[i]){
            valide = false;
        }
    }
    return valide;
}

function estResolu(tableau){
    let valide = true;
    for (let i = 0; i < 9; i++) {
        if(!verifLigne(tableau,i)) valide = false;
        if(!verifColonne(tableau,i)) valide = false;
    }
    return valide;
}

function trouveZeros(tableau){
    let tab = [];
    Object.assign(tab, tableau)
    let tableauDeRetour = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (tableau[i][j] == 0) {
                tableauDeRetour.push([i,j]);
            }
        }
    }
    return tableauDeRetour;
}

function resoudre(tableau){
    let tab = [];
    let tab2 = []
    Object.assign(tab2,tableau);
    
    while (!estResolu(tableau)) {
        Object.assign(tab,tab2);
        let a_modifier = [];
        let zeros = trouveZeros(tab);
        zeros.forEach((element,key) => {
            while (tab[element[0]][element[1]] < 9 && !verifLigne(tab,element[0] && !verifColonne(tab,element[1]))) {
                tab[element[0]][element[1]]++
                if (verifLigne(tab, element[0]) || verifColonne(tab,element[1])) {
                    a_modifier.push([element,tab[element[0]][element[1]]]);
                    
                } else {
                    
                }
            }
            tab[element[0]][element[1]] = 0;
        });


        a_modifier.forEach((element,key) => {
            tab2[element[0][0]][element[0][1]] = element[1];
        });

        tab = [];
    }

    let resultat = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (j%3 == 0 && j!=0) {
                resultat.push("|");
            }
            resultat.push(tab2[i][j]);
            
        }
        if (i%3 == 2 && i!=0 && i!=8) {
            resultat.push("\n---+---+---");
        }
        resultat.push("\n");
    }



    console.log(resultat.join(""));

}
