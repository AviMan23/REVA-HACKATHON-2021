let qrcode = document.querySelector("img");
let qrtext = document.querySelector("textarea") ;
let qrbtn = document.querySelector("button");

qrbtn.addEventListener("click", generateQR);

function generateQR(){
//let size="1000x1000";
let data = qrtext.value;
//let baseURL= " http://api.qrserver.com/v1/create-qr-code/ " ;
let url = "http(s)://api.qrserver.com/v1/create-qr-code/?data=[data]&size=[1000]x[1000] ";
qrcode.src = url;
}

function select(el){
 return document.querySelector(el);
}
