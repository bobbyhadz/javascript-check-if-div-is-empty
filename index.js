console.log('bobbyhadz.com');

const box = document.getElementById('box');

if (box.childNodes.length === 0) {
  console.log('✅ Element is empty');
} else {
  console.log('⛔️ Element is NOT empty');
}
