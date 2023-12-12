function xyz (){
let arrw = [[]] 


let arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(arr[0][0])
console.log(arr[2][1])
console.log(arr[1][3])
let array = ["dog","cat","car"]
console.log(array[1])
let as = array[0]
console.log(as)
array[0]=array[2];
array[2]=as;
console.log(array)

for (let i = 1;i<11 ; i++){
    console.log(i)
}
let pro =+prompt("enter your number")
for (let i = 1; i<11 ; i++ ){
    console.log("10", "*",i, "=" ,10*i)
}
let  fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for (let i = 0;i<fruits.length ; i++){
    console.log(fruits[i])
}

for (let i = 1; i<16 ; i++ ){
    console.log(i)
}

for (let i = 10; i>1 ; i--){
    console.log(i)
}

for (let i = 1; i<22 ; i+=2){
    console.log(i)
}
let a =prompt('enter your item');
let b = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var i = 0 ; i<b.length; i++){
    if(a === b[i]){
            console.log(`${a} is present at ${i} index`)
    }
}

let cs = [24, 53, 78, 91, 12];
    console.log(cs)
let ds =cs[3] 
console.log(ds)
for (let i = 0;i<c.length ; i++){
if(d>c[i]){
    console.log(`${ds} is greater than ${cs} index `)
}
}

let c = [24, 53, 78, 91, 12];
    console.log(c)
let d =c[4] 
console.log(d)
for (let i = 0;i<c.length ; i++){
if(d<c[i]){
    console.log(`${d} is smallest than ${c} index `)
}
}

for (let i = 5;i<101 ; i++){
    // console.log(i)
    if(i%5===0){
        console.log(`${i} is divide by 5`)
    }
}
}
xyz()