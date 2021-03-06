$(document).ready(function () {
  
  // Login form validation to check if fields are empty
  const loginForm = $('#loginForm');
  const loginSubmit = $('#loginSubmit');

  const dni = $('input[name=dni]');
  const email = $('input[name=email]');
  const user = $('input[name=user]');
  const password = $('input[name=password]');

  const trailer = $('button[id=trailer]');
  const gameplay = $('button[id=gameplay]');
  const honest = $('button[id=honest]');

  const trailerTitle = $('.trailer');
  const gameplayTitle = $('.gameplay');
  const honestTitle = $('.honest');

  const dniMessage = $('.message.dni');
  const emailMessage = $('.message.email');
  const userMessage = $('.message.user');
  const passwordMessage = $('.message.password');

  const getCard = document.getElementsByClassName('card-wrapper');

  for (let i = 0; i < getCard.length; i++) {
    const element = getCard[i];
    element.addEventListener('mouseenter', () => {
      element.classList.add('hover')
    });

    element.addEventListener('mouseleave', () => {
      element.classList.remove('hover')
    });

  }

  dniMessage.css('display', 'none');
  emailMessage.css('display', 'none');
  userMessage.css('display', 'none');
  passwordMessage.css('display', 'none');

  trailerTitle.css('display', 'block');
  gameplayTitle.css('display', 'none');
  honestTitle.css('display', 'none');

  trailer.bind('click', () => {
    trailerTitle.css('display', 'block');
    gameplayTitle.css('display', 'none');
    honestTitle.css('display', 'none');
  })
  gameplay.bind('click', () => {
    trailerTitle.css('display', 'none');
    gameplayTitle.css('display', 'block');
    honestTitle.css('display', 'none');
  })
  honest.bind('click', () => {
    trailerTitle.css('display', 'none');
    gameplayTitle.css('display', 'none');
    honestTitle.css('display', 'block');
  })

  loginSubmit.bind('click', function () {
    event.preventDefault();

    if (dni.val() == '') {
      console.log('Vacio');
      dni.addClass('is-invalid');
      dniMessage.css('display', 'block');
    } else {
      console.log(dni.val());
      dni.removeClass('is-invalid');
      dniMessage.css('display', 'none');
    }
    if (email.val() == '') {
      console.log('Vacio');
      email.addClass('is-invalid');
      emailMessage.css('display', 'block');
    } else {
      console.log(dni.val());
      dni.removeClass('is-invalid');
      dniMessage.css('display', 'none');
    }
    if (user.val() == '') {
      console.log('Vacio');
      user.addClass('is-invalid');
      userMessage.css('display', 'block');
    } else {
      console.log(user.val());
      user.removeClass('is-invalid');
      userMessage.css('display', 'none');
    }
    if (password.val() == '') {
      console.log('Vacio');
      password.addClass('is-invalid');
      passwordMessage.css('display', 'block');
    } else {
      console.log(password.val());
      password.removeClass('is-invalid');
      passwordMessage.css('display', 'none');
    }

    if ((email.val() !== '') && (password.val() !== '')) {
      loginValidate();
    }

  });

  let loginValidate = () => {
    console.log(window.location.protocol + '//' + window.location.host + '/home');
    window.location.href = window.location.protocol + '//' + window.location.host + '/home';
  }

  email.keyup(function () {
    console.log(email);
    if (email.hasClass('is-invalid')) {
      email.removeClass('is-invalid')
      emailMessage.css('display', 'none');
    }
  });

  dni.keyup(function () {
    console.log(dni);
    if (dni.hasClass('is-invalid')) {
      dni.removeClass('is-invalid')
      dniMessage.css('display', 'none');
    }
  });

  user.keyup(function () {
    console.log(user);
    if (user.hasClass('is-invalid')) {
      user.removeClass('is-invalid')
      userMessage.css('display', 'none');
    }
  });

  password.keyup(function () {
    console.log(password);
    if (password.hasClass('is-invalid')) {
      password.removeClass('is-invalid')
      passwordMessage.css('display', 'none');
    }
  });

});
