
function stampa(){
    let vet=[];
  

let N=parseInt(document.getElementById("numero").value);

    if(N>=1){ vet.push(0);  }
    if(N>=2){ vet.push(1); }  

    for (let i=2; i<N; i++) {
        vet.push(vet[i-1] + vet[i-2]);
    }
    console.log(vet);

    document.getElementById("risultato").innerHTML = vet.join(", ");
}

