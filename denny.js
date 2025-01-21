var images = [...document.querySelectorAll('.image')];




var popup = document.querySelector('.popup');
const largeImage= document.querySelector ('.large-image');
const leftArrow= document.querySelector ('.left-arrow');
const rightArrow= document.querySelector ('.right-arrow');
const close= document.querySelector ('.close');

let index = 0;


images.forEach ((item, i) => {
  item.addEventListener ('click', () => {
    updateImage (i);
    popup.classList.toggle('active');
  })
})

const updateImage = (i) => {
  let path = `DENNY/File ${i+1}.jpg`;
  largeImage.src = path;
  index = i;
  
}

leftArrow.addEventListener ('click' , () => {
  if (index > 0) {
    updateImage (index - 1);
  }
})

rightArrow.addEventListener ('click' , () => {
  if (index < images.length - 1) {
    updateImage (index + 1);
  }
})
close.addEventListener ('click' , () => {
  popup.classList.remove('active');
})