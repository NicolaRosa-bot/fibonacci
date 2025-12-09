let v=[];
function stampa(){
  

let N=parseInt(document.getElementById("numero").value);

    if(N>=1){ v.push(0);  }
    if(N>=2){ v.push(1); }  

    for (let i=2; i<N; i++) {
        fib[i].push(fib[i-1] + fib[i-2]);
    }

    document.getElementById("risultato").innerHTML = v.join(", ");
}

