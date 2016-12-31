$(function () {
$('#datetimepicker1,#datetimepicker2').datetimepicker({format: 'DD-MMM-YYYY'});
});

$(function(){
	$('.submit').click(function(e){console.log('select_link clicked');
		console.log('clicked');
		e.preventDefault();
		var data = {};
		data.startDate = $('#datetimepicker1 input').val();
		data.endDate = $('#datetimepicker2 input').val();
		$.ajax({
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
			url: 'http://localhost:3000/',		
		});
	});
});