let nbr = parseInt(process.argv[2],10);

let rendu = BigInt(fac(nbr)).toString().replace("n","")

console.log(rendu)


function fac(n){
    if(n == 1) return 1;
    return n * fac(n-1);
}