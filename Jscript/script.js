const modal = document.getElementById("myModal");
const modal1 = document.getElementById("myModal1");
const modalImg = document.getElementById("img01");
const closeBtn = document.querySelector(".close");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

img1.onclick = function () {
  openModal(this.style.backgroundImage.slice(5, -2));
};
img2.onclick = function () {
  openModal(this.style.backgroundImage.slice(5, -2));
};
img3.onclick = function () {
  openModal(this.style.backgroundImage.slice(5, -2));
};
img4.onclick = function () {
  openModal(this.style.backgroundImage.slice(5, -2));
};
img5.onclick = function () {
  openModal(this.style.backgroundImage.slice(5, -2));
};

window.addEventListener("click", function (event) {
  if (event.target == modal || event.target == modal1) {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);

const testimonialImages = document.getElementsByClassName("testimonial-image");
for (let i = 0; i < testimonialImages.length; i++) {
  testimonialImages[i].addEventListener("click", function () {
    openModal(this.getAttribute("data-src"));
  });
}

function openModal(imgSrc) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  modal.style.display = "none";
}

const chatButton = document.querySelector('.float');
const chatModal = document.querySelector('.chat-modal');
const closeModalBtn = document.querySelector('.close-modal');

chatButton.addEventListener('click', () => {
  chatModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  chatModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == chatModal) {
    chatModal.style.display = 'none';
  }
});

// var modal = document.getElementById("myModal");
// var modal1 = document.getElementById("myModal1");
// var modalImg = document.getElementById("img01");
// var closeBtn = document.querySelector(".close");
//
// var img1 = document.getElementById("img1");
// var img2 = document.getElementById("img2");
// var img3 = document.getElementById("img3");
// var img4 = document.getElementById("img4");
// var img5 = document.getElementById("img5");
//
// img1.onclick = function () {
//   openModal(this.style.backgroundImage.slice(5, -2));
// };
// img2.onclick = function () {
//   openModal(this.style.backgroundImage.slice(5, -2));
// };
// img3.onclick = function () {
//   openModal(this.style.backgroundImage.slice(5, -2));
// };
// img4.onclick = function () {
//   openModal(this.style.backgroundImage.slice(5, -2));
// };
// img5.onclick = function () {
//   openModal(this.style.backgroundImage.slice(5, -2));
// };
//
// window.addEventListener("click", function (event) {
//   if (event.target == modal || event.target == modal1) {
//     closeModal();
//   }
// });
//
// closeBtn.addEventListener("click", closeModal);
//
// var testimonialImages = document.getElementsByClassName("testimonial-image");
// for (var i = 0; i < testimonialImages.length; i++) {
//   testimonialImages[i].addEventListener("click", function () {
//     openModal(this.getAttribute("data-src"));
//   });
// }
//
// function openModal(imgSrc) {
//   modal.style.display = "block";
//   modalImg.src = imgSrc;
// }
//
// function closeModal() {
//   modal.style.display = "none";
// }

  // var modal = document.getElementById("myModal");
  // var img = document.getElementById("img1");
  // var img = document.getElementById("img2");
  // var img = document.getElementById("img3");
  // var img = document.getElementById("img4");
  // var img = document.getElementById("img5");
  // var modalImg = document.getElementById("img01");
  // var closeBtn = document.querySelector(".close");
  //
  // window.addEventListener('click', function(event) {
  //   if (event.target == modal) {
  //     closeModal();
  //   }
  // })
  //
  // closeBtn.addEventListener('click', closeModal());
  //
  // img1.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.style.backgroundImage.slice(5,-2);
  // }
  // img2.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.style.backgroundImage.slice(5,-2);
  // }
  // img3.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.style.backgroundImage.slice(5,-2);
  // }
  // img4.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.style.backgroundImage.slice(5,-2);
  // }
  // img5.onclick = function(){
  //   modal.style.display = "block";
  //   modalImg.src = this.style.backgroundImage.slice(5,-2);
  // }
  //
  // function closeModal() {
  //   modal.style.display = 'none'
  // }

  // closeBtn.onclick = function(){
  //   modal.style.display = "none";
  // }
