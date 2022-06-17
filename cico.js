const validationForm = document.getElementById('validationForm');
// console.log(validationForm);

var database = [
  {
    PhoneNumber: '09078662689',
    ActivationCode: '12345',
  },
  {
    PhoneNumber: '08124647811',
    ActivationCode: '22765',
  },
  {
    PhoneNumber: '07034781987',
    ActivationCode: '11908',
  },
];

function validateAgent(phoneNumber, activationCode) {
  database.forEach(data => {
    if (
      phoneNumber === data.PhoneNumber &&
      activationCode === data.ActivationCode
    ) {
      // alert(
      //   ' validation successful redirecting to instructions page hit okay ✔✔'
      // ); 
        console.log(' validation successful');
        location.href = 'instruction.html';
        return (e);
    } else if (
      phoneNumber !== data.PhoneNumber &&
      activationCode !== data.ActivationCode
    ) {
      alert(' activation information Invalid 😶😶😶');
      console.log('activation failed');
     
      
    }
   
  });
}

validationForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateAgent(e.target[0].value, e.target[1].value);
   //parameters are coming from the first input and second input
});

