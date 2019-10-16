$(document).ready(function() {
  var menu_noLogin = `<button type="button" class="btn btn-success mr-1" data-toggle="modal" data-target="#modalRegister">Регистрация</button>
                      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalEnter">Вход</button>`;

  $('.form-inline').append(menu_noLogin);
});


function enter(){
  var login = $('#inputLogin').val(),
      pass  = $('#inputPassword').val();


  var code = 'Basic ' + btoa(login +':'+ pass);

  $.ajax({
    url: '/api/login',
    type: "POST",
    headers:{
      'Authorization': code,
    },
    success: function () {
        console.log("Вы вошли");
    }
  });

  $('.modalEnter').modal('hide');
}

function registration(){
  var regLogin = $('#regLogin').val(),
      regName  = $('#regName').val(),
      regPassword  = $('#regPassword').val();

  $.ajax({
    url: '/api/registration',
    type: "POST",
    data:{
      'login': regLogin,
      'name' : regName,
      'password' : regPassword 
    },
    headers: {
      'Content-Type':'application/json'
    },
    success: function () {
        console.log("Вы зарегистрировались");
    }
  });

  $('.modalRegister').modal('hide');
}