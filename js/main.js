//  SLIDER

$('.slider').slick({
    dots: false,
    autoplay:true,
    autoplaySpeed:3500,
    arrows:true,
    infinite: true,
    swipe:false,
    adaptiveHeight:true,
    centerPadding: '0',
    speed: 800,
    slidesToShow: 1,
    cssEase: 'linear',

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true,
            swipe:true,
           
          }
        }
        ]
  });

//   ---------------TABS--------------------
let tabs = document.querySelectorAll('.tabs__item');
// Получим кнопку
let content = document.querySelectorAll('.content');
// Получим вкладку контента

// Используем forEach, так как кнопок с одним и тем же классом много

tabs.forEach(function(elem){
  elem.addEventListener('click', activeTab);
})
// При нажатии на любую кнопку, сработает функция activeTab

function activeTab() {
  tabs.forEach(function(elem){
//     Уберем у всех кнопок класс активности
  elem.classList.remove('active');
})
//   Добавим конкретной кнопке класс активности
  this.classList.add('active');
  
  let tabName = this.getAttribute('data-tab');
//   получим значение дата-атрибута нажатой кнопки
  activeTabContent(tabName);
//  Вызовем будущую функцию, в качестве параметра укажем атрибут нажатой кнопки
}

function activeTabContent(tabName) {
  content.forEach(function(item){
    item.classList.contains(tabName) ? item.classList.add('hidden') : item.classList.remove('hidden');
  })
}
