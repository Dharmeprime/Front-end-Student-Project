const form = document.getElementById('forms');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
  });

function validate() {
  let ereg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let firstname = document.getElementById('firstname');
  let lastname = document.getElementById('lastname');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let time = document.getElementById('time');
  let service = document.getElementById('service');

  let firstnameValue = firstname.value.trim();
  let lastnameValue = lastname.value.trim();
  let phoneValue = phone.value.trim();
  let emailValue = email.value.trim();
  let timeValue = document.getElementById('time').value;
  let serviceValue = document.getElementById('service').value;

  if (firstnameValue == '') {
    firstname.style.border = '2px  solid #e74c3c';
    document.querySelector('#smallfn').textContent = 'Firstname cannot be empty';
    firstName.focus();
    return false;
  }
  if (lastnameValue == '') {
    lastname.style.border = '2px  solid #e74c3c';
    document.querySelector('#smallln').textContent = 'Lastname cannot be empty';
    lastname.focus();
    return false;
  }
  if (phoneValue == '' || phoneValue < 11 || isNaN(phoneValue)) {
    phone.style.border = '2px  solid #e74c3c';
    document.querySelector('#smallph').textContent = 'Input a valid number';
    phone.focus();
    return false;
  }

  if (emailValue == '' || !emailValue.match(ereg)) {
    email.style.border = '2px  solid #e74c3c';
    document.querySelector('#smallemail').textContent = 'Input a valid email';
    email.focus();
    return false;
  }

  if (timeValue == 1) {
    time.style.border = '2px  solid #e74c3c';
    document.querySelector('#smalltime').textContent = 'Select the best time to call you';
    time.focus();
    return false;
  }

  if (serviceValue == 1) {
    service.style.border = '2px  solid #e74c3c';
    document.querySelector('#smallserv').textContent = 'You need to be sure of the service';
    service.focus();
    return false;
  }else {
    document.querySelector('#smallfn').textContent = ``;
    document.querySelector('#smallln').textContent = ``;
    document.querySelector('#smallph').textContent = ``;
    document.querySelector('#smallemail').textContent = ``;
    document.querySelector('#smalltime').textContent = ``;
    document.querySelector('#smallserv').textContent = ``;

    firstname.style.borderBottom = '2px solid  #2ecc71';
    lastname.style.border = '2px solid  #2ecc71';
    email.style.border = '2px solid  #2ecc71';
    time.style.border = '2px solid  #2ecc71';
    service.style.border = '2px solid  #2ecc71';
    phone.style.border = '2px solid  #2ecc71';

    return true;
  }

}
