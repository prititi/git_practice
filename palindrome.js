//check palendrom====(nitin)

let N=4
let bag=0
for(let i=N-1; i>=0; i++){
    bag+=str[i]
}
if( bag=str[i]){
    console.log("Yes");
}else{
    console.log("No")
}
let N="nitin"
let bag1=""
let bag2=""
for(let i=0;i<=N.length;i++){
  bag1=bag1+N[i]
}
for(let j=N.length; j>=0; j--){
    bag2+=N[j]
}
if( bag1=bag2){
    console.log("Yes");
}else{
    console.log("No")
}