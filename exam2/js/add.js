$(document).ready(function(){
	
	$("#buton").click(function(e){
		e.preventDefault();

		var serviceURL = "http://localhost:8080/CategoryRestService/Add";
		var contenido = {"name":$('#name').val(),
						"description":$('#description').val()};
		
		$.ajax({
			url: serviceURL,
			method: 'put',
			//headers: {"X-HTTP-Method-Override": "PUT"},
			data: contenido,
			success: function(){
				console.log("Woo!");
			},
			error: function(){
				debugger;
			}
		}).then(function(data){
			console.log(data);
		});
	});

});