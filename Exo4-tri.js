let tab = [...process.argv];
tab.splice(0,2);

tab.sort(function(a, b) {return b - a;});

let res = ""
tab.forEach(element => {
    res += element+" "
});

console.log(res);