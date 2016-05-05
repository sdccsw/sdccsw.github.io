$(function() {
	$(".h_fixed").load("header.html");
	$("#footer").load("footer.html");
	$("#main").load("home.html");
});
$(document).on("click", "#产品", function() {
	$("#main").load("product.html");
});
$(document).on("click", "#关于我们", function() {
	$("#main").load("about.html");
});
$(document).on("click", "#售后服务", function() {
	$("#main").load("service.html");
});
$(document).on("click", "#联系我们", function() {
	$("#main").load("contact.html");
});
$(document).on("click", "#s1", function() {
	$("#main").load("proinfo_s1.html");
});
