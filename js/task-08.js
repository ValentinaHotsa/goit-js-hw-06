const logForm = document.querySelector('.login-form');



function qwerty(event) {
    event.preventDefault();
    const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }
    const obj = {
    [form.elements.email.name] : email,
       [form.elements.password.name]: password,
    };
    console.log(obj);
  form.reset();
}


logForm.addEventListener('submit', qwerty)

// .preventDefault();
// alert("Please fill in all the fields!");




