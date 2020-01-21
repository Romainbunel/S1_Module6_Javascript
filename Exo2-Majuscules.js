let mot = process.argv[2];
mot = mot.split("");

mot.forEach((element,key) => {
    if (key%2) {
        mot[key] = element.toUpperCase();
    } else {
        mot[key] = element.toLowerCase();
    }
});

console.log(mot.join(""))