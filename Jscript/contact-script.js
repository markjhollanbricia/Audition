var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;

    Email.send({
        SecureToken : "96ab2d0e-8594-4901-b2ef-5668b382ff61",
        To : 'dooboosplaceph@gmail.com', //verified domian
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
//     Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "dooboosplaceph@gmail.com", //Dooboo's email
//     Password : "rjazkmbmqgwhpape", //Dooboo's generated password
//     To : 'dooboosplaceph@gmail.com', //DooBoo's email
//     From : email,
//     Subject : subject,
//     Body : body
// }).then(
//   message => alert(message)
// );
})
