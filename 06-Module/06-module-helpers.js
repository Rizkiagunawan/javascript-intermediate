function sayHello() {
    console.log("Hello");
  }

  export default sayHello();


  const elFormGreeting = document.querySelector("#form-greeting");
  const btn = elFormGreeting.lastElementChild
  const elInputName = document.querySelector("#input-name");

  btn.onclick = greeting

  export function greeting (){
    var message = elInputName.value
    alert(`Hello, ${message}`)
  }
