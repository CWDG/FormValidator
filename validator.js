
  var $email  = $('#email');
  var $password = $(':password');

  var $errors = $('.errors li');
  var $err_email_invalid  = $($errors[0]);
  var $err_pass_short     = $($errors[1]);
  var $err_pass_noUpper   = $($errors[2]);
  var $err_pass_noNum     = $($errors[3]);

  var emailValidated
  var passwordValidated

  // ಠ_ಠ
  var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

$(function(){

  //evaluate field validation conditions and toggle error message visibility
  //note: match condition and message array by index (would be better to use map)
  function evaluate(conditions, messages) {
    var results = []
    conditions.forEach(function(condition, index) {
      if(condition) {
        messages[index].show();
        results.push(false);
      }
      else {
        messages[index].hide();
        results.push(true);
      }
    });

    //field validation passes only if all of the conditions evaluate to true
    return $.inArray(false, results) === -1
  }

  function validate(field) {

    if(field.attr('id') === $email.attr('id')) {

      var email = field.val();
      console.log('validating email: ' + email);

      //validate email
      var conditions = [(!email.match(emailRegex))]
      var messages   = [$err_email_invalid]

      emailValidated = evaluate(conditions, messages);

    }
    else if(field.attr('id') === $password.attr('id')) {

      var password = field.val();
      console.log('validating password: ' + password);

      //validate password
      var conditions = [(password.length < 8), (!password.match(/[A-Z]/)), (!password.match(/\d+/))]
      var messages   = [$err_pass_short      , $err_pass_noUpper         , $err_pass_noNum]

      passwordValidated = evaluate(conditions, messages);

    }

  }

  //attach event handlers to input fields
  $(':input')
    //validate on focusout
    .focusout(function() { validate($(this)) })
    //validate focused field on enter keydown
    .keydown(function (e) {
      var key = e.which;
      if(key == 13)  // 'enter' key code
        validate($(this));
    })
    //if validation has failed retry validation on every keypress
    .keyup(function(e) {
      if(emailValidated === false) validate($email);
      if(passwordValidated === false) validate($password);
    })

});
