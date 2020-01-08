let blogList = [
    {
        topic: 'Спорт',
        title: 'Лучшая украинская теннисистка.',
        time: 'March 02, 2019 00:20:18',
        page: 'Лучшая украинская теннисистка Элина Свитолина (№5 WTA) начала новый сезон с поражения на хардовом Премьере в Брисбене.'
    },
    {
        topic: 'Спорт',
        title: 'МЧМ по хоккею.',
        time: 'July 21,, 2019 01:20:18',
        page: 'В финале Канада в напряженном матче обыграла Россию, хотя североамериканская сборная по ходу встречи проигрывала 0:1 и 1:3, однако сделала камбэк.'
    },
    {
        topic: 'Путешествие',
        title: 'Виды на Бали',
        time: 'May 11, 2019 01:20:18',
        page: 'Лучшее место для жини!'
    },
    {
        topic: 'Путешествие',
        title: 'Лучшее где я был',
        time: 'December 25, 2018 01:20:18',
        page: 'Places'
    },
    {
        topic: 'Музыка',
        title: 'Смоки Мо представит «Стейкхаус»',
        time: 'April 10, 2019 02:20:18',
        page: 'Концерт Смоки Мо состоится 4 апреля 2020 года в «Известия Hall». Рэпер представит композиции со своего недавнего альбома «Стейкхаус», а также лучшие песни с предыдущих восьми пластинок.'
    }
];

let getValueHeading = function () {
    let indexSelect = document.getElementById( 'select_heading' ).options.selectedIndex;
    let select = document.getElementById( 'select_heading' );
    let value = select.options[indexSelect].text;
    return value;
};

let getValueTime = function () {
    let indexSelect = document.getElementById( 'select_time' ).options.selectedIndex;
    let select = document.getElementById( 'select_time' );
    let value = select.options[indexSelect].text;
    return value;
};

function filterVal(val,list){
    let result=[];
    list.forEach( i => {
    if(i.topic.indexOf(val) != -1)
        result.push(i)
  });
    return result;
};

let sortTime =  function (list, time){
    if (time == 'Самые новые') {
        return list.sort((a,b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } else if (time == 'Давно написанные') {
        return list.sort((a,b) => new Date(a.time).getTime() - new Date(b.time).getTime())
    }
};

sortTime(blogList, getValueTime());
renderList( blogList,result );

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
    let new_arr_heading = filterVal( getValueHeading(),blogList );
    renderList( new_arr_heading,result );
    if (getValueHeading() == 'Выберите жанр') {
        renderList( blogList,result );
    }
});

document.getElementById( 'select_time' ).addEventListener('change',e => {
    e.preventDefault();
    let new_arr_heading = filterVal( getValueHeading(),blogList );
    sortTime(new_arr_heading, getValueTime())
    renderList( new_arr_heading,result );
    if (getValueHeading() == 'Выберите жанр') {
        sortTime(blogList, getValueTime());
        renderList( blogList,result );
    }
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
