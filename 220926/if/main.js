let now = new Date();
console.log(now);

now = now.getHours();
console.log(now);

const main = document.querySelector('main');

if (now >= 0 && now < 13) {
  main.style.backgroundColor = 'lightblue';
}

if (now >= 13 && now < 16) {
  main.style.backgroundColor = 'pink';
}
if (now >= 16 && now < 24) {
  main.style.backgroundColor = 'lightgreen';
}