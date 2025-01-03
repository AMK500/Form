const form = document.getElementById('login-form');
const formControls = form.querySelectorAll('input, select, textarea');

formControls.forEach(control => {
  control.addEventListener('input', ()=> {
    if (control.value) control.classList.add('to-top');
    else control.classList.remove('to-top');
  });
});