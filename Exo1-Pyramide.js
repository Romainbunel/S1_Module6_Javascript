let taille = parseInt(process.argv[2],10);
if (typeof taille == 'number' && taille > 0) {
    for (let i = 1; i < taille; i++) {
        let ligne = [];
        for (let j = 0; j < taille-i; j++) {
            ligne += " ";
        }
        for (let k = taille-i; k < taille; k++) {
            ligne+= "#";   
        }
        console.log(ligne);
    }
} else {
    console.log("Entrez un nombre valide.")
}

