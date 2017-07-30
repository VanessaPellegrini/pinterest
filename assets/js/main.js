$(document).ready(function() {
//console.log(arr);
	var maxImg = 20;
	var indexImg = 0;

	function ponerImagen(imgInfo){
		var div = 	'<div class="lista-img contenedorModal">\
						<ul>\
							<li>\
								<img src="dist/img/'+imgInfo.image_url+'" alt="" width="250">\
								<div class="cajaTexto">\
									<h3>'+imgInfo.title+'</h3>\
									<small class="pinLike"><i class="fa fa-thumb-tack" aria-hidden="true"></i>36,6K <i class="fa fa-check" aria-hidden="true"></i> 6</small>\
									<p>'+imgInfo.description+'</p>\
									<div class="iconImg"><img src="dist/img/love.png" alt=""></div><small class="userInfo">'+imgInfo.user+'<small> #'+imgInfo.hashtag+'</small></small>\
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
			var modalData = '<div class="first-modal-box">\
							<ul>\
								<li><i>ICON</i></li>\
								<li><i>ICON</i></li>\
								<li><i>ICON</i></li>\
							</ul>\
							<button>GUARDAR</button>\
						</div>\
						<div class="titulo-modal">\
							<h4>hola</h4>\
						</div>\
						<div class="img-modal">\
							<img src="dist/img/1.jpg" alt="">\
						</div>\
						<div class="second-modal-box">\
							<ul>\
								<li><i>ICON</i></li>\
								<li><i>ICON</i></li>\
								<li><i>ICON</i></li>\
							</ul>\
							<button>GUARDAR</button>\
						</div>\
						<div class="usuario-modal">\
							<h5>pedrito</h5>\
							<div class="hasgtag-modal">\
								<small>holiwi</small>\
							</div>\
						</div>\
						<div class="btn-leer">\
							<button>Leerlo</button>\
						</div>\
						<div class="descripcion-modal">\
							<p></p>\
						</div>';
			infoModal.find('.modal-body').html(modalData);
            modal.modal('show');
			//console.log(this);
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
