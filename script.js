$(document).ready(function () {
	$("section img").click(function () {
		$(this).fadeOut("slow");
	});

	$("a").click(function () {
		$("section img").show();
	});
});
