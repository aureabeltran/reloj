//esto es para la fecha
setInterval(function(){
	//arreglo con los meses del año
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	//para los dias
	var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"]
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	// poner el dia el mes y el año   
	$('#fecha').html(dias[newDate.getDay()] + " " + newDate.getDate() + ' ' + meses[newDate.getMonth()] + ' ' + newDate.getFullYear());
})
setInterval(function(){
	var newHour = new Date();
	newHour.setTime(newHour.getTime());
	var hora = new Date().getHours();
	if (hora < 10) {
		hora = "0" + hora;
	}
	var minuto = new Date().getMinutes();
	if (minuto < 10) {
		minuto = "0" + minuto;
	}
	var segundo = new Date().getSeconds();
	if (segundo < 10) {
		segundo = "0" + segundo;
	}
	$("#hora").html(hora + ":" + minuto + ":" + segundo);
})
//esto es par el boton de las zonas horarias
var cities = [
			{ciudad:"Chicago", zonaHoraria:"GMT -5"}, 
			{ciudad:"Sao Paulo", zonaHoraria:"GMT -3"}, 
			{ciudad:"Santiago", zonaHoraria:"GMT -4"}, 
			{ciudad:"Mexico D.F", zonaHoraria:"GMT -5"}, 
			{ciudad:"Caracas", zonaHoraria:"GMT -4"}, 
			{ciudad:"Brasilia", zonaHoraria:"GMT -3"}, 
			{ciudad:"Quito", zonaHoraria:"GMT -5"}, 
			{ciudad:"Gauyaquil", zonaHoraria:"GMT -5"}, 
			{ciudad:"Santa Marta", zonaHoraria:"GMT -5"}, 
			{ciudad:"Bogota", zonaHoraria:"GMT -5"}];
function mas(){
	$("#zona").html("Zonas Horarias:")
	for (var i = 0 ; i <= 9; i++) {
		$("#zona").append("<li class='lista'>" +"<input type='checkbox' class='option'/>" + " " + "Ciudad:" + " " + cities[i].ciudad + " " + ";" +  "Zona Horaria:" + " " + cities[i].zonaHoraria + "</li>");
	}
}

function cambioCheck(evento) {
	$(".lista").addClass("color");
	
}
jQuery("body").bind("change", "input[type='checkbox']", cambioCheck);