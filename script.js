// Images asset
const fruitImages = {
    1:'https://raw.githubusercontent.com/emma-t/Website/main/resources/14.jpg',
    2:'https://raw.githubusercontent.com/emma-t/Website/main/resources/13.jpg',
    3:'https://raw.githubusercontent.com/emma-t/Website/main/resources/12.jpg',
    4:'https://raw.githubusercontent.com/emma-t/Website/main/resources/11.jpg',
    5:'https://raw.githubusercontent.com/emma-t/Website/main/resources/10.jpg',
    6:'https://raw.githubusercontent.com/emma-t/Website/main/resources/9.jpg',
    7:'https://raw.githubusercontent.com/emma-t/Website/main/resources/8.jpg',
    8:'https://raw.githubusercontent.com/emma-t/Website/main/resources/7.jpg',
    9:'https://raw.githubusercontent.com/emma-t/Website/main/resources/6.jpg',
    10:'https://raw.githubusercontent.com/emma-t/Website/main/resources/5.jpg',
    11:'https://raw.githubusercontent.com/emma-t/Website/main/resources/4.jpg',
    12:'https://raw.githubusercontent.com/emma-t/Website/main/resources/3.jpg',
    13:'https://raw.githubusercontent.com/emma-t/Website/main/resources/2.jpg',
    14:'https://raw.githubusercontent.com/emma-t/Website/main/resources/1.jpg',
    15:'https://raw.githubusercontent.com/emma-t/Website/main/resources/0.75.jpg',
    16:'https://raw.githubusercontent.com/emma-t/Website/main/resources/0.5.jpg',
    17:'https://raw.githubusercontent.com/emma-t/Website/main/resources/0.25.jpg',
    18:'https://raw.githubusercontent.com/emma-t/Website/main/resources/0.JPG',

}
// Text style
const textStyle = {
  1: {opacity: 0, transform: '0px'},
  2: {opacity: 0, transform: '0px'},
  3: {opacity: 0, transform: '0px'},
  4: {opacity: 0, transform: '0px'},
  5: {opacity: .25, transform: '15px'},
  6: {opacity: .5, transform: '10px'},
  7: {opacity: .75, transform: '5px'},
  8: {opacity: 1, transform: '0px'},
  9: {opacity: 1, transform: '0px'},
  10: {opacity: 1, transform: '0px'},
  11: {opacity: 1, transform: '0px'},
  12: {opacity: 1, transform: '0px'},
  13: {opacity: 1, transform: '0px'},
  14: {opacity: 1, transform: '0px'},
  15: {opacity: 1, transform: '0px'},
  16: {opacity: 1, transform: '0px'},
  17: {opacity: 1, transform: '0px'},
  18: {opacity: 1, transform: '0px'},
}

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image

function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/30) + 1, 18);
  const imageToUse = fruitImages[label];
  // Change the background image
  $('.image-container').css('background-image', `url('${imageToUse}')`);
  // Change the text style
  const textStep = 2;
  const textStyleToUseLine1 = textStyle[label];
  const textStyleToUseLine2 = textStyle[Math.min(Math.max(label - textStep, 1), 18)];
  const textStyleToUseLine3 = textStyle[Math.min(Math.max(label - textStep * 2, 1),18)];
  const textStyleToUseLine4 = textStyle[Math.min(Math.max(label - textStep * 3, 1),18)];
  $('#line1').css({'opacity': textStyleToUseLine1.opacity, 'transform': `translateY(${textStyleToUseLine1.transform})`});
  $('#line2').css({'opacity': textStyleToUseLine2.opacity, 'transform': `translateY(${textStyleToUseLine2.transform})`});
  $('#line3').css({'opacity': textStyleToUseLine3.opacity, 'transform': `translateY(${textStyleToUseLine3.transform})`});
  $('#line4').css({'opacity': textStyleToUseLine4.opacity, 'transform': `translateY(${textStyleToUseLine4.transform})`});

}

$(document).ready(()=>{
  // register an event listener on window
  $(window).scroll(()=>{
    // We don't need to use 'event' as the scroll exist in window
    trackScrollPosition();
  })
})
