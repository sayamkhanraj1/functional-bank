document.getElementById('login-submit').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const userMail = emailField.value;

   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;

   if (userMail == 'sontan@gmail.com' && userPassword == 'sontan'){
       window.location.href = "banking.html";
   }
})