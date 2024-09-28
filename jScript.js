function mybutton() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const nationality = document.getElementById('nationality').value;
    const occupation = document.getElementById('occupation').value;


    
    const formData = `
    First Name : ${firstname}
    Last Name : ${lastname}
    Email : ${email}
    Phone : ${phone}
    Date of Birth : ${dob}
    Gender : ${gender}
    Address : ${address}
    Nationality : ${nationality}
    Occupation : ${occupation}
  `;

    alert(formData)

    const submitButton = document.getElementById('submitbutton');
    submitButton.disabled = true;
}

