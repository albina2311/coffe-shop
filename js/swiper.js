let commentsList = [
    {
        img: './img/comments/albina.png',
        name: 'Альбина Яковлева',
        text: 'Доброго времени суток! Не раздумывая, решила написать отзыв вашей кофейне. Мой ребёнок рвался в «Coffee Step” со дня открытия. Все-таки, решили сходить. Всем друзьям буду советовать. Вы лучшие!'
    },
    {
        img: './img/comments/olga.png',
        name: 'Ольга Полякова',
        text: 'Первый раз пришла сюда в июле 2021 года. Знаете, такой дозы счастья не получала уже давно. Прихожу сюда стабильно раз в неделю. Считаю, что «Coffee Step” мой антидепрессант.'
    },
    {
        img: './img/comments/oleg.png',
        name: 'Олег Бондар',
        text: ' Всем привет! Очень понравился сервис, а  ещё безумно вкусный лавандовый раф с кусочком Пинчера. Ребята, вы приносите в этот мир каплю доброты. Спасибо большое!'
    },
    {
        img: './img/comments/elena.png',
        name: 'Елена Андреева',
        text: 'Всегда прихожу в “Coffee Step”, чтобы отвлечься от ежедневной рутины. Вкусный кофе, отзывчивый персонал - все, что нужно, для отвлечения и расслабления. Всем советую эту кофейню. '
    },
    {
        img: './img/comments/evgenia.png',
        name: 'Сергей Иванов',
        text: 'Всем привет! Заказываю  уже на протяжении полу года. Прекрасная продукция, вкусный кофе и пирожные. Надеюсь, вы будете расширяться, ставить новые кофейни. '
    },
    {
        img: './img/comments/sergey.png',
        name: 'Евгения Юрченко',
        text: 'Если бы у меня была кофейня, то именно такая! Ребята очень ответственно относятся к каждому покупателю. Тепло, уютно и очень доброжелательно.Ах да, и ещё тут хороший кофе!'
    },
    {
        img: './img/comments/andrey.png',
        name: 'Андрей Березен',
        text: 'Приветливый персонал, очень вкусный кофе, всегда заказываю дополнительную продукцию домой. Да что уж там,лучшая кофейня, которую я посещал.Дети довольны!'
    }
]

commentsList.forEach(comment => {
    let $comment = document.createElement('div');
    $comment.classList.add('swiper-slide');

    $comment.innerHTML = `
    <img src="${comment.img}" class="swiper_img">
    <h3 class="heading swiper_heading">${comment.name}</h3>
    <p class="text swiper_comment">${comment.text}</p>`;

    document.querySelector('.swiper-wrapper').appendChild($comment);
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 70,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
    swiper.slideNext();
})