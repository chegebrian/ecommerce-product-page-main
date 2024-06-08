const openMenuEl = document.querySelector(".open-menu");
const closeMenuEl = document.querySelector(".close-menu");
const ulEl = document.querySelector(".ul-elements");
const productImageSection = document.querySelector(".product-image-section");
const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
const thumbnail = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];

// open the menu
openMenuEl.addEventListener("click", () => {
  ulEl.classList.remove("-translate-x-full");
});
// close the menu
closeMenuEl.addEventListener("click", () => {
  ulEl.classList.add("-translate-x-full");
});

let index = 0;
function nextImage() {
  if(index === images.length - 1) {
    index = 0;
  }else index ++;
  displayProducts(index);
}
function prevImage() {
  if(index === 0) {
    index = images.length - 1;
  }else index --;
  displayProducts(index);
}

function changeImage(index){
  displayProducts(index);
}

function displayProducts(index) {
  const markup = `
  
    <div class="relative">
          <div class="flex justify-between items-center inset-0 p-4 
          absolute">
            <button
              class="rounded-full bg-slate-100 p-4 w-8 h-8 flex items-center justify-center" onclick="prevImage()"
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button
              class="rounded-full bg-slate-100 p-4 w-8 h-8 flex items-center justify-center ml-auto" onClick="nextImage()"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div>
          <img
            src="${images[index]}"
            alt=""
            class="md:rounded-lg md:min-w-80"
          />
          </div>

        </div>
        <div
          class="thumbnail md:flex md:gap-4 md:items-center md:justify-center md:mt-8 hidden transtion-all ease-linear"
        >
        ${thumbnail
          .map((image, index) => {
            return ` <img
            src="${image}"
            alt=""
            class="rounded-lg w-16 "
            onClick = "changeImage(${index})"
          />`;
          })
          .join("")}

        </div>
    `;
  productImageSection.innerHTML = "";
  productImageSection.insertAdjacentHTML("beforeend", markup);
}
displayProducts(index);


