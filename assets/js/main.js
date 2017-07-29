//console.log(arr);

var maxImg = 20;
var indexImg = 0;

function ponerImagen(imgInfo){
	var div = 	'<div class="el">\
					<img src="dist/img/'+imgInfo.image_url+'" alt="" width="220" height="300">\
					<h5>'+imgInfo.title+'</h5>\
					<p>'+imgInfo.description+'</p>\
					<p>'+imgInfo.user+'<small>'+imgInfo.hashtag+'</small></p>\
				</div>';
	//$("#container").append(div);
	$(div).appendTo('#container').hide().show('slow');
};

function siguientesImg(){
	var contador = 0; 
	for (var i = indexImg; i < arr.length && contador < maxImg; i++) {
		var elem = arr[i];
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


/*$.each(arr, function(index, value) {
	console.log(value);
	ponerImagen(value);
});*/