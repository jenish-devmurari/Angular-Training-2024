const input = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];
const output =[];
var zerocount = 0;

for(let i=0;i<input.length;i++){
    if(input[i] != 0){
        output.push(input[i]);
    }else{
        zerocount++;
    }
}

for(let i=0;i<zerocount;i++){
    output.push(0);
}

console.log(output);