let inputbox = document.getElementById("inputbox");
let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrimage");

function generateQR(){
  if(inputbox.value.length > 0){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputbox.value;
  }
  
}