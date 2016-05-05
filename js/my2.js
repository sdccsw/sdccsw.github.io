$(function() {
	$("#content").load("about_content.html");
});
$(document).on("click", "#企业简介", function() {
	remove();
	add($(this));
	$("#content").load("about_content.html");
});
$(document).on("click", "#发展历程", function() {
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
$(document).on("click", "#荣誉证书", function() {
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
$(document).on("click", "#品牌优势", function() {
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
function remove() {
	$("#企业简介").removeAttr("class");
	$("#发展历程").removeAttr("class");
	$("#荣誉证书").removeAttr("class");
	$("#品牌优势").removeAttr("class");
}
function add($doc){
	$doc.attr("class","hover");
}