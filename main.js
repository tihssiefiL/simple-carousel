let yy_Carousel_container_W = document.getElementById('yy-Carousel-container').offsetWidth
const yy_Carousel_offset = 'translateX(-' + yy_Carousel_container_W + 'px)'
let yy_Carousel = document.getElementById('yy-Carousel')
let yy_Carousel_Item = document.querySelectorAll('.yy-Carousel-Item')
let slide = document.querySelectorAll('#yy-Carousel')[0]
let index = 1
yy_Carousel.style.width = yy_Carousel.children.length * 100 + '%'
for(let i = 0; i < yy_Carousel.children.length; i++) {
    yy_Carousel_Item[i].style.width = yy_Carousel_container_W + 'px'
}
function yy_carousel_controler_next () {
    if (index == yy_Carousel.children.length) {
        index = 0
        yy_Carousel.style.transform = 'translateX(-' + yy_Carousel_container_W * (index++) + 'px)'
    } else {
    yy_Carousel.style.transform = 'translateX(-' + yy_Carousel_container_W * (index++) + 'px)'
    }
}
function yy_carousel_controler_prev () {
    if (index !==1) {
        yy_Carousel.style.transform = 'translateX(-' + (yy_Carousel_container_W * --index - yy_Carousel_container_W).toString() + 'px)'
    } else {
        index = yy_Carousel.children.length
        yy_Carousel.style.transform = 'translateX(-' + (yy_Carousel_container_W * index - yy_Carousel_container_W).toString() + 'px)'    
    }
}
let autoTrans = setInterval(() => {
    yy_carousel_controler_next()
},2000)
let clearAutoTrans = () => {
    clearInterval(autoTrans)
}