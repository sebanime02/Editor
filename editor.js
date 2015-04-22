var  imageData;
var data;
var imageData1;
var data1;
var imagen="Koala.jpg";

//inicio de jQuery

$(document).ready(inicio);

function inicio (){
	setTimeout('dibujar()',200);	 //se repite la funcion dibujar cada 400ms
	$("#red").change(ajustarRojo);
	$("#green").change(ajustarVerde);
	$("#blue").change(ajustarAzul);
	$("#brillo").change(AjustarBrillo);
	$("#negative").click(AjustarNegativo);
	$("#file").change(cargar);
}

function dibujar (){
	var img = new Image();

	img.src = imagen;   //ruta de la imagen
     
	var canvas = document.getElementById("grafico");
	var context = canvas.getContext("2d");

	canvas.width = img.width;
	canvas.height = img.height;	
	context.drawImage(img,0,0);
	imageData = context.getImageData(0,0,canvas.width, canvas.height);

	data = imageData.data;
}

 function cargar() {
    var reader = new FileReader();
reader.onload = function(event) {
    var dataUri = event.target.result,
        context = document.getElementById("grafico").getContext("2d"),
        img     = new Image();
 
    // wait until the image has been fully processed
    img.onload = function() {
        context.drawImage(img, 0, 0);
    };
    img.src = dataUri;
    imagen= dataUri;
};

reader.readAsDataURL(file);
  }


function ajustarRojo(){
	var canvas = document.getElementById("grafico");
	var context = canvas.getContext("2d");
	 var imageData1 = context.getImageData(0,0,canvas.width,canvas.height);
	 var data1 = imageData1.data;
	 var valor = $("#red").prop("value");
	 valor = parseInt(valor);
	 
	 for (var pos=0; pos < data1.length;pos+=4){
		 data1[pos]=data[pos]+valor;
		 
	 }
	 
	context.putImageData(imageData1,0,0);
}

function ajustarVerde(){
	var canvas = document.getElementById("grafico");
	var context = canvas.getContext("2d");
	 var imageData1 = context.getImageData(0,0,canvas.width,canvas.height);
	 var data1 = imageData1.data;
	 var valor = $("#green").prop("value");
	 valor = parseInt(valor);
	 
	 for (var pos=0; pos < data1.length;pos+=4){
		 data1[pos+1]=data[pos+1]+valor;
		 
	 }
	 
	context.putImageData(imageData1,0,0);
}

function ajustarAzul(){
	var canvas = document.getElementById("grafico");
	var context = canvas.getContext("2d");
	 var imageData1 = context.getImageData(0,0,canvas.width,canvas.height);
	 var data1 = imageData1.data;
	 var valor = $("#blue").prop("value");
	 valor = parseInt(valor);
	 
	 for (var pos=0; pos < data1.length;pos+=4){
		 data1[pos+2]=data[pos+2]+valor;
		 
	 }
	 
	context.putImageData(imageData1,0,0);
}

function AjustarBrillo(){

var canvas = document.getElementById("grafico");
	var context = canvas.getContext("2d");
	 var imageData1 = context.getImageData(0,0,canvas.width,canvas.height);
	 var data1 = imageData1.data;
	 var valor = $("#brillo").prop("value");
	 valor = parseInt(valor);
	 
	 for (var pos=0; pos < data1.length;pos+=4){
		 data1[pos]=data[pos]+valor;
		 data1[pos+1]=data[pos+1]+valor;
		 data1[pos+2]=data[pos+2]+valor;

	 }
	 
	context.putImageData(imageData1,0,0);



}

function AjustarNegativo(){

var canvas = document.getElementById("grafico");
	var context = canvas.getContext("2d");
	 var imageData1 = context.getImageData(0,0,canvas.width,canvas.height);
	 var data1 = imageData1.data;
	 var valor = $("#negative").prop("value");
	 valor = parseInt(valor);
	 
	 for (var pos=0; pos < data1.length;pos+=4){
		 data1[pos]=255-data1[pos];
		 data1[pos+1]=255-data1[pos+1];
		 data1[pos+2]=255-data1[pos+2];

	 }
	 
	context.putImageData(imageData1,0,0);



}






















