import Button from "./components/button/index.js";

const testBtn = new Button({
  text: 'Ok!'
})

const app = document.getElementById('app');

app.innerText = 'Hello';

app.appendChild(testBtn.element);