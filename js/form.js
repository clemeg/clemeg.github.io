function formSubmit() {
	var name    = $('#formName').val();
	var email   = $('#formEmail').val();
	var message = $('#formMessage').val();
	if ($('#formHuman').is(':checked')) {
		alert(name+"\n"+email+"\n"+message);
	} else {
		alert("ROBOT!");
	}
};