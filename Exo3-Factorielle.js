let nbr = parseInt(process.argv[2],10);

console.log(fac(nbr))


let fac = function(n){
    if(n == 1) return 1;
    return n * fac(n-1);
}