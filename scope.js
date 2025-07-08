console.log(x);
var x=10;
console.log(x);

//console.log(y);
let y=20;
console.log(y);

sum(2,3)
function sum(a,b)
{
  let res=a+b
  console.log(res)
}


let m=100;
function outer(a,b){
  let c=20;
  function inner(x,y){
    let z=30;
    console.log(a,b,c)
    console.log(m)
  }
  inner(100,200)
}
outer(10,20)