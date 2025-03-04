class rectangle{
    constructor(length,width,color){
        this.length = length;
        this.width = width;
        this.color = color;
    }

    area(){
        return this.length * this.width;
    }

    paint(){
        console.log("The color of the rectangle is " + this.color);
    }

}

const rect = new rectangle(5,5,"red");
console.log(rect.area());


const map = new Map();
map.set("name","ABHI");
map.set("age",21);
console.log(map.get("name"));


//write a function that reads the content of a file 

const fs = require("fs");
function readTheFile(giveMeTheContents) {
    fs.readFile("a.txt", "utf-8", function(error, data) {
        giveMeTheContents(data);
    });
}
function readFile(fileName){
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback);

//create own promise class 

class Promise2{
    constructor(fn){
        function afterDone(data){
            this.resolve();
        }  
        fn(afterDone)
    }

    then(callback){
        this.resolve = callback;
    }

}

//settimeout promisified
function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
      setTimeout(resolve, duration);
    });
  }
  
  function callback(){
    console.log("2 sec has been passed");
  }
  
  setTimeoutPromisified(10000).then(callback);

//callback hell

setTimeout(function(){
    console.log("hii");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        },5000);
    },2000);
},1000);

//promise chaining 
