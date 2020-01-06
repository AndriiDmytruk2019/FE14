let blogList = [
    {
        topic: 'Спорт',
        title: 'Лучшая украинская теннисистка.',
        date: '',
        time: 'Mar 12 2012 12:00:00 AM',
        page: 'Лучшая украинская теннисистка Элина Свитолина (№5 WTA) начала новый сезон с поражения на хардовом Премьере в Брисбене.'
    },
    {
        topic: 'Спорт',
        title: 'МЧМ по хоккею.',
        date: '',
        time: 'Mar 18 2012 10:00:00 AM',
        page: 'В финале Канада в напряженном матче обыграла Россию, хотя североамериканская сборная по ходу встречи проигрывала 0:1 и 1:3, однако сделала камбэк.'
    },
    {
        topic: 'Путешествие',
        title: 'Виды на Бали',
        date: '',
        time: 'Mar 12 2012 15:00:00 AM',
        page: 'Лучшее место для жини!'
    },
    {
        topic: 'Музыка',
        title: 'Смоки Мо представит «Стейкхаус»',
        date: '',
        time: '15:00:00 AM',
        page: 'Концерт Смоки Мо состоится 4 апреля 2020 года в «Известия Hall». Рэпер представит композиции со своего недавнего альбома «Стейкхаус», а также лучшие песни с предыдущих восьми пластинок.'
    }
];

const result = document.getElementById('result');

let getValueHeading = function () {
    let indexSelect = document.getElementById( 'select_heading' ).options.selectedIndex;
    let select = document.getElementById( 'select_heading' );
    let value = select.options[indexSelect].text;
    return value;
};

// let getValueTime = function () {
//     let indexSelect = document.getElementById( 'select_time' ).options.selectedIndex;
//     let select = document.getElementById( 'select_time' );
//     let value = select.options[indexSelect].text;
//     console.log(value)
//     return value;
// };

renderList( blogList,result );

function filter(val,list){
    let result=[];
    list.forEach( i => {
    if(i.topic.indexOf(val) != -1)
        result.push(i)
  })
    return result;
};

// console.log(new Date().getTime())
let sortTime =  function (){
    console.log( blogList.sort((a,b) => new Date(a.time).getTime()));
    // return blogList.sort((a,b) => new Date(a.time).getTime() - new Date(b.time).getTime())
};console.log(sortTime())

function renderList(list,el){
    el.innerHTML='';
    list.forEach(i=>{
        let new_block = document.createElement( 'div' );
        let title = document.createElement( 'h2' );
        let page = document.createElement( 'p' );
        new_block.appendChild( title );
        new_block.appendChild( page );
        title.innerHTML = i.topic;
        page.innerHTML = i.page;
        el.appendChild( new_block );
  })
};

document.getElementById( 'select_heading' ).addEventListener('change',e => {
    e.preventDefault();
    let new_arr_heading = filter( getValueHeading(),blogList );
    renderList( new_arr_heading,result );
});


document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('header span');
    console.log(elasticItems);
    if (val != '') {
        elasticItems.forEach(function (elem) {
            console.log(elem.innerText.toString(), val);
            if (elem.innerText.search(val) == -1) {
                elem.innerHTML = elem.innerText;
            }
            else {
                let str = elem.innerText;
                // console.log(str)
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }    
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.innerHTML = elem.innerText;
        });
    }
}

function insertMark(string, pos, len) {
    // hello world
    // hello <mark>wo</mark>rld
    // hello+<mark>+wo+</mark>+rld
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
