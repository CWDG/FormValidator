
  //insert your code here

 	var $password = $(':password');
 	var $email = $('#email');

 	var $errors = $('.errors li')

 	var passwordSelected = function() { $password.is(':focus') }
 	var passwordSelected = function() { $email.is(':focus') }


$(function(){

 	function validate(field){
 		console.log('validate.')
 		var email = field.val();
 		console.log(email);
 		if(field.attr('id') === $email.attr('id')){
 			//validates $email field
 			if(email.match(/\A[^@]+@([^@\.]+\.)+[^@\.]+\z/) == null){ $($errors[0]).show() }else{ $($errors[0]).hide();}

 		}
 		if(field.attr('id') === $password.attr('id')){
 			//validates $password field
 			var password = field.val();
 			console.log(password);
 			if( password.length < 8){ $($errors[1]).show() } else if(password.length > 8) { $($errors[1]).hide(); }
 			if( password.match(/[A-Z]/) == null){ $($errors[2]).show() }else{ $($errors[2]).hide(); }
 			if( password.match(/[0-9]/) == null){ $($errors[3]).show() }else{ $($errors[3]).hide(); }
 		}

 	}


	$(':input').focusout(function(){validate($(this))})


});
