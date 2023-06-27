// função ANÔNIMA

//pt1
 const f = function(v1,v2) {
    return v1 + v2;
}
console.log(f(2,2))


//pt2
const x = function(...valores) {
    let res=0
   for (v of valores) {
        res+=v
    }
    return res
   }
console.log(x(2,2))

//pt3 Construtor Anônima
const y = new Function("v1","v2", "return v1 + v2");

console.log(y(4,4))