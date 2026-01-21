//exporting module in nodeJS
function add(a,b){
    let sum = a +b;
    console.log(`The sum is: ${sum}`);
}
add(5,3);
module.exports={add};