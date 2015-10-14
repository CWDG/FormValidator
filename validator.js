
  //insert your code here
 
$(function(){
	$(".errors li").hide();
	$(":password").keyup(passwordHandler);
	$(":text").keyup(emailHandler);


  //insert your code here

  function emailHandler() {
  	var email = $(":text").val();
  	if(!email.match(/[\w\d.]+@\w+\.\w+/)) {
  		$($(".errors li")[0]).show();
  	}
  	else {
  		$($(".errors li")[0]).hide();
  	}
	}



  function passwordHandler(){
  	var pass = $(":password").val();
  	if(pass.length < 8 ) { 
  		$($(".errors li")[1]).show();
	}
	else {
		$($(".errors li")[1]).hide();
	}
	if(!pass.match(/\d/)) {
		$($(".errors li")[3]).show();
	}
	else {
		$($(".errors li")[3]).hide();
	}
	if(!pass.match(/[A-Z]/)) {
		$($(".errors li")[2]).show();
	}
	else {
		$($(".errors li")[2]).hide();
	}

	}
});
