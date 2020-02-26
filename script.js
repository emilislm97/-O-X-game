let count = 1;
let x = "X";
let o = "O";
let M = [];
let g =0;
let f =0;


onload = function() {
  Arr();
  Tbl();
  alert(" X-O oyununa başlamaq üçün oyunçu adlarını daxil et")
  document.getElementById("s1").innerHTML =prompt("Oyunçu adı 1","")
  document.getElementById("s2").innerHTML =prompt("Oyunçu adı 2","")
};

function Arr() {
  for (let i = 0; i < 3; i++) {
    M[i] = [];
  }
}

function Tbl() {
  let tbl = "";

  for (let i = 0; i < 3; i++) {
    tbl += "<tr>";
    for (let j = 0; j < 3; j++) {
      M[i][j] = M[i][j] == undefined ? "" : M[i][j];
      tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
    }
    tbl += "</tr>";
  }
  document.getElementsByTagName("table")[0].innerHTML = tbl;
}

function Click(i, j) {
  if (M[i][j] == "") {
    if (count % 2 == 0) {
      M[i][j] = o;
    } else {
      M[i][j] = x;
    }
    count++;
    Tbl();
    setTimeout(Check,200);
  }
}


function Check() {
  g=document.getElementById("i1").value;
  f=document.getElementById("i2").value;
    
    for(let i = 0; i<3;i++){
        if(M[i][0]==M[i][1] && M[i][0]==M[i][2] && M[i][0]!=""){
            
            if(M[i][0] == x){
              g++;
              document.getElementById("i1").value = g;
            }
            else{
              f++;
              document.getElementById("i2").value = f;
            }
            Restart();
        }

    for(let i = 0; i<3;i++){
        if(M[0][i]==M[1][i] && M[0][i]==M[2][i] && M[0][i]!=""){
            if(M[0][i] == x){
              g++;
              document.getElementById("i1").value = g;
            }
            else{
              f++;
              document.getElementById("i2").value = f;
            }
            Restart();
        }
    }

    if(M[0][0]==M[1][1] && M[0][0]==M[2][2] && M[0][0]!=""){
      if(M[0][0] == x){
        g++;
        document.getElementById("i1").value = g;
      }
      else{
        f++;
        document.getElementById("i2").value = f;
      }
        Restart();
    }
    }

    if(M[0][2]==M[1][1] && M[0][2]==M[2][0] && M[0][2]!=""){
      if(M[0][2] == x){
        g++;
        document.getElementById("i1").value = g;
      }
      else{
        f++;
        document.getElementById("i2").value = f;
      }
        Restart();
    }

    else if(count % 10==0){
      alert("beraber");
      Restart();
          }

}



function Restart() {
    count = 0;
    Arr();
    Tbl();
}