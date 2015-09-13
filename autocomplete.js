$(function () {
	$("#city").autocomplete({
        source: function (request, response) {
			$.ajax({
				url: "http://www.hubbins.com/weatherproxy/api/autocomplete",
				dataType: "jsonp",
				data: {
					query: request.term
				},
				success: function (data) {
              
					// change data to array of strings
					var results = [];
					for (var i = 0; i < data.RESULTS.length; i++) {
						results.push(data.RESULTS[i].name);
					}
              
					// always call response() with the data
					response(results);
				}
			});
        },
        minLength: 3,
        select: function (event, ui) {
			alert(ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
        },
        open: function () {
			$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
			$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
	});
});
