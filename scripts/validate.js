$(document).ready(function() {
  $("#login_form").submit(function(e){
    e.preventDefault();
    var email = $('#login_email').val();
    var password = $('#login_password').val();
    var email_error = false;
    var password_error = false;
    var email_error_msg = '';
    var password_error_msg = '';
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

   if (!expr.test(email)) {
       email_error = true;
       email_error_msg = 'Emailul nu este valid.';
   }

   var pass_expr = new RegExp("^[a-zA-Z0-9]+$");
   if(!pass_expr.test(password)) {
     password_error = true;
     password_error_msg = 'Parola nu este valida.';
   }

   if(!email_error || !password_error) {
     alert(email_error_msg + ' ' + password_error_msg);
     return;
   } else {
     $(this).submit();
   }
  });
});
