// This file is injected as a content script
console.log("Hello from content script! 2");
const elP: any = document.getElementsByTagName("h2");

const num = elP.length;
console.log("Hay " + num + " <p> elementos en el elemento div2");

for (const item of elP) {
  // item.innerHTML = 'toma porcurioso';
  console.log("id", item);
}
