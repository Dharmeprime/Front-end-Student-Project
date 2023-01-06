let form = document.getElementById('forms');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   validate();
 });

function validate() {
  let ereg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let firstName = document.getElementById('myfn');
  let lastName = document.getElementById('myln');
  let companyName = document.getElementById('mycn');
  let phoneNumber = document.getElementById('myph');
  let companySize = document.getElementById('csi');
  let continent = document.getElementById('cont');
  let review = document.getElementById('review');

  let firstNameValue = document.getElementById('myfn').value.trim();
  let lastNameValue = document.getElementById('myln').value.trim();
  let companyNameValue = document.getElementById('mycn').value.trim();
  let phoneNumberValue = document.getElementById('myph').value.trim();
  let companySizeValue = document.getElementById('csi').value;
  let continentValue = document.getElementById('cont').value;
  let reviewValue = document.getElementById('review').value.trim();

  if (firstNameValue === '') {
    firstName.style.border = '2px  solid #e74c3c';
    document.querySelector('#smallfn').textContent = 'Firstname cannot be empty';
    firstName.focus();
    return false;
  }

  if (lastNameValue === '') {
    lastName.style.border = '2px solid #e74c3c';
    document.querySelector('#smallln').textContent = 'Lastname cannot be empty';
    lastName.focus();
    return false;
  }

  if (companyNameValue === '' || !companyNameValue.match(ereg)) {
    companyName.style.border = '2px solid #e74c3c';
    document.querySelector('#smallcn').textContent = `Input Valid Email`;
    companyName.focus();
    return false;
  }

  if (phoneNumberValue == '' || phoneNumberValue.length < 11 || isNaN(phoneNumberValue)) {
    phoneNumber.style.border = '2px solid #e74c3c';
    document.querySelector('#smallph').textContent = `Input Valid phone number`;
    companyName.focus();
    document.myForm.numb.focus();
    return false;
  }

  if (companySizeValue == 1) {
    companySize.style.border = '2px solid #e74c3c';
    document.querySelector('#smallcsi').textContent = `Select your company's size`;
    companySize.focus();

    return false;
  }

  if (continentValue == 1) {
    continent.style.border = '2px solid #e74c3c';
    document.querySelector('#smallcont').textContent = `Select the continent of your company`;
    continent.focus();
    return false;
  }

  if (reviewValue === '') {
    review.style.border = '2px solid #e74c3c';
    document.querySelector('#smallreview').textContent = `Help us get better by dropping a review`;
    review.focus();
  }  else {
    document.querySelector('#smallfn').textContent = ``;
    document.querySelector('#smallln').textContent = ``;
    document.querySelector('#smallcn').textContent = ``;
    document.querySelector('#smallph').textContent = ``;
    document.querySelector('#smallcsi').textContent = ``;
    document.querySelector('#smallcont').textContent = ``;
    document.querySelector('#smallreview').textContent = ``;


    firstName.style.border = '2px solid  #2ecc71';
    lastName.style.border = '2px solid  #2ecc71';
    companyName.style.border = '2px solid  #2ecc71';
    phoneNumber.style.border = '2px solid  #2ecc71';
    companySize.style.border = '2px solid  #2ecc71';
    continent.style.border = '2px solid  #2ecc71';
    review.style.border = '2px solid  #2ecc71';
    return true;
  }

}
