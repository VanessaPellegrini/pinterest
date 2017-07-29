$(document).ready(function() {
//console.log(arr);

	var maxImg = 20;
	var indexImg = 0;

	function ponerImagen(imgInfo, index){
		var div = 	'<div class="el contenedorModal">\
						<img src="dist/img/'+imgInfo.image_url+'" alt="" width="220" height="300">\
						<h5>'+imgInfo.title+'</h5>\
						<p>'+imgInfo.description+'</p>\
						<p>'+imgInfo.user+'<small>'+imgInfo.hashtag+'</small></p>\
					</div>';
		div = $(div);//Convierte en objeto jquery para poder utilizarlo.

		div.data('info', imgInfo);//Método que permite adjuntar datos de cualquier tipo a los elementos DOM.
		//$("#container").append(div);

		div.find('img').click(function(event) {
			var info = div.data('info');
			console.log(info);
		});
		div.appendTo('#container').hide().show('slow');
	};

	function siguientesImg(){
		var contador = 0; 
		for (var i = indexImg; i < data.length && contador < maxImg; i++) {
			var elem = data[i];
			ponerImagen(elem);
			contador++;
		}
		indexImg += contador;
	};

	siguientesImg();

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       siguientesImg();
	   }
	});
	/*modal*/
	$('img[src="dist/img/'+data.image_url+'"]').click(function(){
		alert('Evento click sobre un input text con nombre="nombre1"');
	});
/*	$(".contenedorModal").click(function(){
		$('.target').show(3000,function() {
                alert ('imagen mostrada!');
		});
 	});
	$("#ocultar").click(function(){
		$('.target').hide(3000,function() {
                alert ('imagen ocultada!');
		});
	});*/
			var numImg = function(data){
		var obtenerNumIMg = data.image_url;
		console.log(obtenerNumIMg);
	}
	numImg();
		$("img[src="data.image_url"]").click(function(){
		alert('Evento click sobre un input text con nombre="nombre1"');
	});
			/*modal*/
	$("img[src="data.image_url"]").click(function(){
		alert('Evento click sobre un input text con nombre="nombre1"');
	});
/*	$(".contenedorModal").click(function(){
		$('.target').show(3000,function() {
                alert ('imagen mostrada!');
		});
 	});
	$("#ocultar").click(function(){
		$('.target').hide(3000,function() {
                alert ('imagen ocultada!');
		});
	});*/
	
});
