let keys = document.getElementsByClassName("key");
let body = document.getElementsByTagName("body");
let aud = document.getElementsByTagName("audio");
// let body = document.getElementsByTagName("body");
console.log(aud);

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("mouseenter", () => {
    keys[i].classList.toggle("playing");
  });
  keys[i].addEventListener("mouseover", () => {
    keys[i].classList.toggle("playing");
  });
}
// console.log(keys);

let keyCollection = [];
function getKeys(keys) {
  for (let i = 0; i < keys.length; i++) {
    keyCollection.push(keys[i].getAttribute("data-key"));
  }
}
let audioKeyCollection = [];
function getAudioKeys(keys) {
  for (let i = 0; i < keys.length; i++) {
    audioKeyCollection.push(keys[i].getAttribute("data-key"));
  }
}
getKeys(keys);
// console.log(keyCollection);
getAudioKeys(aud);
// console.log(audioKeyCollection);

function playThisKey(code) {
  for (let i = 0; i < aud.length; i++) {
    let originalCode = aud[i].getAttribute("data-key");
    if (originalCode == code) {
      aud[i].play();
    }
  }
}

document.addEventListener("keydown", e => {
  keyCollection.forEach(item => {
    if (item == e.keyCode) {
      audioKeyCollection.forEach(ele => {
        if (ele == item) {
          // console.log(ele);
          playThisKey(ele);
        }
      });
      // console.log(`${item} was clicked`);
    }
  });
  // console.log(e.keyCode);
});
