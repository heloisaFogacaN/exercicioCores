const mudar=document.getElementById("mudar");
let i=0;

function mudarCor(){
    console.log(i);
    if (i < 3) {
        if (i==0) {
            document.body.style.backgroundColor = "red";
            i++;
        } else if(i==1){
            document.body.style.backgroundColor= "blue";
            i++;
        } else if(i==2){
            document.body.style.backgroundColor = "pink";
            i++;
        }
      } else{
        i=0;
      }
}
