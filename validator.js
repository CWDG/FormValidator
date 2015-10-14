
  var $email  = $('#email');
  var $password = $(':password');

  var $errors = $('.errors li');
  var $err_email_invalid  = $($errors[0]);
  var $err_pass_short     = $($errors[1]);
  var $err_pass_noUpper   = $($errors[2]);
  var $err_pass_noNum     = $($errors[3]);

   // ಠ_ಠ
  var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

$(function(){

  function validate(field) {

    if(field.attr('id') === $email.attr('id')) {

      var email = field.val();
      console.log('validating email: ' + email);

      //validate email
      if(!email.match(emailRegex)) $err_email_invalid.show();

      else $err_email_invalid.hide();

    }
    else if(field.attr('id') === $password.attr('id')) {

      var password = field.val();
      console.log('validating password: ' + password);

      //validate password
      if(password.length < 8) $err_pass_short.show();
      else $err_pass_short.hide();

      if(!password.match(/[A-Z]/)) $err_pass_noUpper.show();
      else $err_pass_noUpper.hide();

      if(!password.match(/\d+/)) $err_pass_noNum.show();
      else $err_pass_noNum.hide();

    }

  }

  //bind focusout validate event
  $(':input').focusout(function() { validate($(this)) });

});
