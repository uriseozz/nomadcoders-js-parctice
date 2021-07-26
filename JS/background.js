const images = ["1.jpg","2.jpg","3.jpg"]; // 파일이름 정확히 쓰기

const chosenImage = images[Math.floor(Math.random() * images.length)]; //floor -- 내림

const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);