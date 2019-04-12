class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.imgs = this.carousel.querySelectorAll('img');
        this.imgs[0].style.display = 'flex';
        this.currentIndex = 0;
        

        this.leftButton.addEventListener('click', () => this.moveLeft());
        this.rightButton.addEventListener('click', () => this.moveRight());

    }

    moveLeft() {

        if(this.currentIndex === 0) {
            this.imgs[this.currentIndex].style.display = 'none';
            this.currentIndex = this.imgs.length-1;
            this.imgs[this.currentIndex].style.display = 'flex';
        }

        else {
            this.imgs[this.currentIndex].style.display = 'none';
            this.currentIndex--;
            this.imgs[this.currentIndex].style.display = 'flex';
        }
    }

    moveRight() {

        if(this.currentIndex === this.imgs.length-1) {
            this.imgs[this.currentIndex].style.display = 'none';
            this.currentIndex = 0;
            this.imgs[0].style.display = 'flex';
        }

        else {
            this.imgs[this.currentIndex].style.display = 'none';
            this.currentIndex++;
            this.imgs[this.currentIndex].style.display = 'flex';
        }
    }
}

let carousel = document.querySelector('.carousel');
let carouselObject = new Carousel(carousel);
console.log(carouselObject);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/