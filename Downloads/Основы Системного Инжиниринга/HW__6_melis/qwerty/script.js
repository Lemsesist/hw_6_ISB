function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let isValid = true;
  
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
  
    if (name === "") {
      document.getElementById("nameError").innerText = "Поле 'Имя' не может быть пустым";
      isValid = false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").innerText = "Введите корректный email";
      isValid = false;
    }
    if (password.length < 8) {
      document.getElementById("passwordError").innerText = "Пароль должен содержать минимум 8 символов";
      isValid = false;
    }
    return isValid;
  }
  
  function calculate() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    let result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerText = "Пожалуйста, введите оба числа";
      return;
    }
  
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "На ноль делить нельзя";
        break;
    }
  
    document.getElementById("result").innerText = `Результат: ${result}`;
  }
  




  