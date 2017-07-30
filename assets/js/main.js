$(document).ready(function() {
//console.log(arr);
	var maxImg = 20;
	var indexImg = 0;

	function ponerImagen(imgInfo){
		var div = 	'<div class="lista-img contenedorModal">\
						<ul>\
							<li>\
								<div class="contenedorImg">\
									<img src="dist/img/'+imgInfo.image_url+'" alt="" width="250">\
								</div>\
								<div class="cajaTexto">\
									<div class="cajaLike">\
										<small class="pinLike"><i class="fa fa-thumb-tack" aria-hidden="true"></i>36,6K <i class="fa fa-check" aria-hidden="true"></i> 6</small>\
									</div>\
									<div class="cajaTituloDescrip">\
										<h4>'+imgInfo.title+'</h4>\
										<p>'+imgInfo.description+'</p>\
									</div>\
									<div class="iconImg">\
										<img src="dist/img/love.png" alt="">\
										<small class="userInfo">'+imgInfo.user+'<small> #'+imgInfo.hashtag+'</small></small>\
									</div>\
								</div>\
							</li>\
						</ul>\
					</div>';

		div = $(div);//Convierte en objeto jquery para poder utilizarlo.

		/*modal*/
		div.data('info', imgInfo);//Método que permite adjuntar datos de cualquier tipo a los elementos DOM.
		//$("#container").append(div);

		var infoModal = $('#myModal');

		div.find('img').click(function(event) {//find devuelve elementos descendentes del elemento seleccionado(los child).
			var info = div.data('info');
			/*console.log(info);*/
			var modalData = '<div class="modalBox" id="muestraModal">\
								<div class="iconosModalTop">\
				 					<ul>\
					 					<li><a href="#"><i class="fa fa-upload fa-2x" aria-hidden="true"></i></a></li>\
					 					<li><a href="#"><i class="fa fa-check fa-2x" aria-hidden="true"></i></a></li>\
					 					<li><a href="#"><i class="fa fa-ellipsis-h fa-2x" aria-hidden="true"></i></a></li>\
				 					</ul>\
				 					<button class="btn btn-default"><i class="fa fa-thumb-tack" aria-hidden="true"></i> GUARDAR</button>\
			 					</div>\
			 					<div class="titulo-modal">\
			 						<h3>'+info.title+'</h3>\
			 					</div>\
					 			<div class="img-modal">\
					 				<img src="dist/img/'+info.image_url+'" alt="">\
					 			</div>\
					 			<div class="iconosModalBot">\
				 					<ul>\
					 					<li><a href="#"><i class="fa fa-upload fa-2x" aria-hidden="true"></i></a></li>\
					 					<li><a href="#"><i class="fa fa-check fa-2x" aria-hidden="true"></i></a></li>\
					 					<li><a href="#"><i class="fa fa-ellipsis-h fa-2x" aria-hidden="true"></i></a></li>\
				 					</ul>\
				 					<button class="btn btn-default"><i class="fa fa-thumb-tack" aria-hidden="true"></i> GUARDAR</button>\
			 					</div>\
					 			<div class="usuario-modal">\
					 				<img src="dist/img/love.png" alt=""><small class="userInfo">'+info.user+'<small> #'+info.hashtag+'</small></small>\
					 				<button class="btn btn-default">Leerlo</button>\
					 			</div>\
					 			<div class="descripcion-modal">\
					 				<p>'+info.description+'</p>\
					 			</div>\
					 		</div>';
			 			
			infoModal.find('.fotoCompleta').html(modalData);
            infoModal.modal();
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
});
