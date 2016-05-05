$(function() {
	$("#content").load("service_content.html");
});
$(document).on("click", "#服务总则", function() {
	remove();
	add($(this));
	$("#content").load("service_content.html");
});
$(document).on("click", "#服务承诺", function() {
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
$(document).on("click", "#常见问题", function() {
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
function remove() {
	$("#服务总则").removeAttr("class");
	$("#服务承诺").removeAttr("class");
	$("#常见问题").removeAttr("class");
}
function add($doc){
	$doc.attr("class","hover");
}