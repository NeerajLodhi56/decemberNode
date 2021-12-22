var fs = require ('fs')
// fs.writeFile('myode.txt',"this is node inbuilt tutorial learn with akash",function(){
//     if(err) throw err;
//     console.log('file creared')
// })
fs.appendFile('myText.txt',"this is from naresh IT hyderabad \n",function(err){
if(err)
    throw err
console.log('file appended')

})