let bish = document.getElementById("input").elements["bishInp"];
let bosh = document.getElementById("input").elements["boshInp"];
let loop = document.getElementById("input").elements["loopInp"];
let result = document.getElementById("result");

function useValues(event){
    event.preventDefault();
    doTheloop(bish.value,bosh.value,loop.value);
}

const inp = document.getElementById("input")
inp.addEventListener('submit', useValues);


function doTheloop(bish,bosh,loop){
    loop =  loop;
    result.innerHTML = "";
    let s = [];
    for (let i = 1; i<=loop; i++){
        
        if(i % bosh == 0 && i % bish == 0){  
            s[i] = "<h1> " + " Bish-Bosh " + " </h1>";
        }
        else if(i % bish == 0){
            s[i] = "<h1> " + " Bish " + " </h1>";
        }
        else if(i % bosh == 0){
            s[i] = "<h1> " + " Bosh " + " </h1>";
        }else{
            s[i] = "<h1> " + i + " </h1>";
        } 
    }
    result.innerHTML = s;
}
bishBosh();