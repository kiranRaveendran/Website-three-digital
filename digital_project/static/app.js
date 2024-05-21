// navbar
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
//   document.body.classList.toggle('bg-white'); 
});

    // slider

    let sliderContainer = document.getElementById('sliderContainer');
    let slider = document.getElementById('slider');
    let cards = slider.getElementsByTagName('li');

    let elementsToShow = calculateElementsToShow();

    let currentIndex = 0;

    function initializeSlider() {
        elementsToShow = calculateElementsToShow();
        let sliderContainerWidth = sliderContainer.clientWidth;
        let cardWidth = sliderContainerWidth / elementsToShow;

        slider.style.width = cards.length * cardWidth + 'px';
        slider.style.marginLeft = -cardWidth * elementsToShow + 'px';

        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            element.style.width = cardWidth + 'px';
        }
    }

    function calculateElementsToShow() {
        return window.innerWidth >= 640 ? 5 : 1;
    }

    function Prev() {
        currentIndex = (currentIndex === 0) ? cards.length - elementsToShow : currentIndex - 1;
        slideToIndex(currentIndex);
    }

    function Next() {
        currentIndex = (currentIndex === cards.length - elementsToShow) ? 0 : currentIndex + 1;
        slideToIndex(currentIndex);
    }

    function slideToIndex(index) {
        let cardWidth = cards[0].clientWidth;
        let newMargin = -cardWidth * index;
        
        if (index === cards.length - elementsToShow) {
            newMargin = 0;
        } else if (index === 0 && cards.length > elementsToShow) {
            newMargin = -cardWidth * (cards.length - elementsToShow * 2);
        }

        slider.style.transition = 'margin 4s  ease';
        slider.style.marginLeft = newMargin + 'px';
    }

    window.addEventListener('resize', initializeSlider);
    window.addEventListener('load', initializeSlider);



// readmorebtn
function myFunction(button) {
    var parentDiv = button.parentElement;
    var dots = parentDiv.querySelector(".dots");
    var moreText = parentDiv.querySelector(".more");
    var btnText = parentDiv.querySelector(".myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "VIEW MORE"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "VIEW LESS"; 
        moreText.style.display = "inline";
    }
}

// infinitscroll

const infiniteScroll = document.querySelector('.infinite-scroll');

infiniteScroll.addEventListener('scroll', function() {
  
  if (infiniteScroll.scrollLeft + infiniteScroll.clientWidth >= infiniteScroll.scrollWidth) {

    const list = document.querySelector('.list');
    const clonedList = list.cloneNode(true); 
    infiniteScroll.appendChild(clonedList);
  }
});
