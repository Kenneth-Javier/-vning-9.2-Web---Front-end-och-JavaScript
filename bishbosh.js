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
        s[i] = "<h1> "
        if(i % bosh == 0 && i % bish == 0){  
            s[i] += " Bish-Bosh ";
        }
        else if(i % bish == 0){
            s[i] += " Bish ";
        }
        else if(i % bosh == 0){
            s[i] += " Bosh ";
        }else{
            s[i] += i;
        } 
        s[i] += " </h1>";
    }
    result.innerHTML = s;
}
bishBosh();