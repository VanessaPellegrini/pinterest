console.log("modal-ready");
$(document).ready(function(){
	$(img).click(function(){
		console.log(img);
		$('.target').show(3000,function() {
                alert ('imagen mostrada!');
		});
 	});
	$("#ocultar").click(function(){
		$('.target').hide(3000,function() {
                alert ('imagen ocultada!');
		});
	});
});

/*$.each(arr, function(index, value) {
	console.log(value);
	ponerImagen(value);
});*/