$(document).on("click", "#产品分类", function() {
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
$(document).on("click", "#盛威s1", function() {
	$("#main").load("proinfo_s1.html");
});
$(document).on("click", "#盛威s2", function() {
	$("#main").load("proinfo_s2.html");
});

$(document).on("click", "#企业简介", function() {
	$("#main").load("about.html");
	remove();
	add($(this));
	$("#content").load("about_content.html");
});
$(document).on("click", "#发展历程", function() {
	$("#main").load("about.html");
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
$(document).on("click", "#荣誉证书", function() {
	$("#main").load("about.html");
	remove();
	add($(this));
	$("#content").load("about_null.html");
});
$(document).on("click", "#品牌优势", function() {
	$("#main").load("about.html");
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
function add($doc) {
	$doc.attr("class", "hover");
}
$(document).on("click", "#服务总则", function() {
	$("#main").load("service.html");
	remove(1);
	add($(this));
	$("#content").load("service_content.html");
});
$(document).on("click", "#服务承诺", function() {
	$("#main").load("service.html");
	remove1();
	add($(this));
	$("#content").load("about_null.html");
});
$(document).on("click", "#常见问题", function() {
	$("#main").load("service.html");
	remove1();
	add($(this));
	$("#content").load("about_null.html");
});
function remove1() {
	$("#服务总则").removeAttr("class");
	$("#服务承诺").removeAttr("class");
	$("#常见问题").removeAttr("class");
}