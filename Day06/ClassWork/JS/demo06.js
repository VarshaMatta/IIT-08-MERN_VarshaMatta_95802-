//default parameters
function add(x=1, y, z=3){
    let sum= x+y+z;
    console.log(`Sum: ${x}+${y}+${z}=${sum}`);
}
add(5,3,2)
add(5)
add(3,4)