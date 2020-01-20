let blogList = [
    {
        number: 0,
        topic: 'Спорт',
        title: 'Лучшая украинская теннисистка.',
        time: '2019-02-6 00:20:18',
        like: 0,
        coments: [],
        page: 'Лучшая украинская теннисистка Элина Свитолина (№5 WTA) начала новый сезон с поражения на хардовом Премьере в Брисбене.'
    },
    {   
        number: 1,
        topic: 'Спорт',
        title: 'МЧМ по хоккею.',
        time: '2019-12-21 00:20:18',
        like: 0,
        coments: [],
        page: 'В финале Канада в напряженном матче обыграла Россию, хотя североамериканская сборная по ходу встречи проигрывала 0:1 и 1:3, однако сделала камбэк.'
    },
    {
        number: 2,
        topic: 'Путешествие',
        title: 'Виды на Бали',
        time: '2019-11-28 01:20:18',
        like: 0,
        coments: [],
        page: 'Лучшее место для жини!'
    },
    {
        number: 3,
        topic: 'Путешествие',
        title: 'Лучшее где я был',
        time: '2018-10-14 01:20:18',
        like: 0,
        coments: [],
        page: 'Places'
    },
    {
        number: 4,
        topic: 'Музыка',
        title: 'Смоки Мо представит «Стейкхаус»',
        time: '2019-03-31 02:20:18',
        like: 0,
        coments: ['okm', '[;l[p]]'],
        page: 'Концерт Смоки Мо состоится 4 апреля 2020 года в «Известия Hall». Рэпер представит композиции со своего недавнего альбома «Стейкхаус», а также лучшие песни с предыдущих восьми пластинок.'
    }
];

/*Change status*/
function stateStatus (state = false) {
    if (state == true) {
        document.querySelector('main').style.display = 'block';
        renderList( blogList,result )
    }
};stateStatus(true)

/*Registration*/
// localStorage.clear();
function registration() {
    const objUser = {};
    // let regBlock = document.getElementById('header-block__registration');
    // let signBlock = document.getElementById('header-block__sign');
    const regBtn = document.getElementById('header-block__registration')
        .querySelector('button');
    const signBtn = document.getElementById('header-block__sign')
        .querySelector('button');
    const regInput = [...document.getElementById('header-block__registration')
        .getElementsByTagName('input')];
    const signInput = [...document.getElementById('header-block__sign')
        .getElementsByTagName('input')];
    let boolean = false;

    function regProcess(input) {
        regBtn.onclick = el => {
            if (input[0].value !== '' && input[1].value !== '' && input[3].value !== '' && boolean == false) {
                for( let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i) == input[0].value) {
                        boolean = true;
                        alert('Вы уже зарегистрированы');
                    }
                    if (localStorage.key(i) == '') {
                        localStorage.removeItem('');
                    } 
                }
                if (boolean == false && input[1].value == input[2].value) {
                        input.forEach(el => objUser[el.className] = el.value);
                        localStorage.setItem(input[0].value, JSON.stringify(objUser));
                        alert('Вы успешно зарегистрированы!');
                } else {
                    alert('Поля паролей не совпадают');
                }
                input.forEach(el => el.value = '');
            } else {
                input.forEach(el => el.value == '' ? el.placeholder = 'Некоректное заполнение' : el.value);
            }
        }
    };regProcess(regInput);

    function signIn(button, input) {
       button.onclick = () => {
            if (input[0].value !== '' && input[1].value !== '' && boolean == false) {
                for( let i = 0; i < localStorage.length; i++) {
                    let objPars = JSON.parse(localStorage[localStorage.key(i)])['pass'];
                    if (localStorage.key(i) == input[0].value & objPars == input[1].value) {
                        boolean = true;
                        alert('Вход разрешен');
                        stateStatus (true)
                    }
                }
                if (boolean == false) {
                    alert('Пользователь не зарегистрирован')
                }
                input.forEach(el => el.value = '');
            } else {
                input.forEach(el => el.value == '' ? el.placeholder = 'Заполните поле' : el.value);
            }
        }
    };
    signIn(signBtn, signInput);
}; registration();

/*Add new article*/
function publickArticle() {
    const
        newTitle= document.getElementById( 'add-article__title' ),
        newPage = document.getElementById( 'add-article__page' ),
        selectValue = document.getElementById( 'select_heading' ),
        indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' );
    const newArticle = {
        'number': blogList.length,
        'topic': select.options[indexSelect].text,
        'title': newTitle.value,
        'time': new Date().getFullYear() + '-' + new Date().getMonth()+1 + '-' + new Date().getDate()+ ' ' + new Date().getHours() + ':' + new Date().getMinutes()+ ':' + new Date().getSeconds(),
        'like': 0,
        'coments': [],
        'page': newPage.value,
    };
    blogList.unshift(newArticle);
    if (newArticle['topic'] == getValueSelect(selectValue.id)) {
        let addInTopic = filterVal( getValueSelect(selectValue.id),blogList );
        pagination(addInTopic);
        renderList( addInTopic,result );
        liker(addInTopic);
        comentator(addInTopic);
    } else if (getValueSelect(selectValue.id) == 'Выберите жанр') {
        pagination(blogList);
        renderList( blogList,result );
        liker(blogList);
        comentator(blogList);
    };

    newTitle.value = '';
    newPage.value = '';
};
document.getElementById( 'push_article' ).onclick=()=>publickArticle();

/*Filter blog*/
function getValueSelect( id ) {
    let indexSelect = document.getElementById( id ).options.selectedIndex;
    let select = document.getElementById( id );
    let value = select.options[indexSelect].text;
    return value;
};

/*Change value*/
function filterVal( val,list ) {
    return list.filter( item => {
    if( item.topic.indexOf( val ) != -1 )
        return item;
    })
};

/*Sort time*/
function sortTime( list, time ) {
    if ( time == 'Самые новые' ) {
        return list.sort( ( a,b ) => new Date( b.time ).getTime() - new Date( a.time ).getTime() );
    } else if ( time == 'Давно написанные' ) {
        return list.sort( ( a,b ) => new Date( a.time ).getTime() - new Date( b.time ).getTime())
    } else if ( time == 'Популярные') {
        return list.sort( ( a,b ) => b.like - a.like );
    } else if ( time == 'Непопулярные' ) {
        return list.sort( (a,b) => a.like - b.like );
    }
};

/*Render blog*/
// const result  = document.getElementById( 'result' );
function renderList( list,el ){
    el.innerHTML='';
    list.forEach(obj =>{
        let new_block = document.createElement( 'div' ),
            time = document.createElement( 'p' )
            title = document.createElement( 'h2' ),
            page = document.createElement( 'p' ),
            like = document.createElement( 'span' ),
            sentBlock = document.createElement( 'div' ),
            coment = document.createElement( 'div' ),
            link = document.createElement( 'a' ),
            forComent = document.createElement( 'textarea' ),
            btnComent = document.createElement( 'button' );
        like.className = obj.number;
        coment.className = 'coment-block';
        btnComent.className = 'coment-block__btn';
        forComent.name = obj.number;
        btnComent.name = obj.number;
        new_block.appendChild( title );
        new_block.appendChild( time );
        new_block.appendChild( page );
        new_block.appendChild( like );
        new_block.appendChild( sentBlock );
        new_block.appendChild( coment );
        coment.appendChild( link );
        coment.appendChild( forComent );
        coment.appendChild( btnComent );
        time.innerHTML = obj.time;
        title.innerHTML = obj.title;
        page.innerText = obj.page;
        like.innerText = obj.like;
        obj.coments.forEach(el => {
            sentComent = document.createElement( 'p' );
            coment.appendChild(sentComent);
            sentComent.innerHTML = el;
        });
        btnComent.innerHTML = 'Прокоментировать';
        el.appendChild( new_block );
  });
};renderList( blogList,result );

document.getElementById( 'select_heading' ).addEventListener('change',e => {
    e.preventDefault();
    let new_arr_heading = filterVal( getValueSelect(e.target.id),blogList );
    if (getValueSelect(e.target.id) == 'Выберите жанр') {
        pagination(blogList);
        renderList( blogList,result );  
        liker(blogList);
        comentator(blogList);
    } else {
        pagination(new_arr_heading);
        renderList( new_arr_heading, result );
        liker(new_arr_heading);
        comentator(new_arr_heading);

    }
});

document.getElementById( 'select_time' ).addEventListener('change',e => {
    e.preventDefault();
    let indexSelect = document.getElementById( 'select_heading' );
    let new_arr_time = filterVal( getValueSelect(indexSelect.id), blogList );

    if (getValueSelect(indexSelect.id) == 'Выберите жанр') {
        sortTime(blogList, getValueSelect(e.target.id));
        pagination(blogList);
        renderList( blogList,result );
        liker(blogList);
        comentator(blogList);
    } else {
        sortTime(new_arr_time, getValueSelect(e.target.id));
        pagination(new_arr_time)
        renderList( new_arr_time, result );
        liker(new_arr_time);
        comentator(new_arr_time);
    }
});

/*Btn Active*/
function btnActive() {
    let indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' )
                    .options[indexSelect].text,
        btnPush = document.getElementById( 'push_article' ),
        newTitle = document.getElementById( 'add-article__title' ).value,
        newPage = document.getElementById( 'add-article__page' ).value;
    return newTitle !== '' & newPage !== '' ? btnPush.disabled = false : btnPush.disabled = true;
};
document.getElementById( 'add-article__select_heading' ).onchange=()=>btnActive();


/*Add Coments*/
function comentator(list) {
    let article = [...document.getElementById( 'result' )
        .getElementsByTagName( 'textarea' )];
    let comentBtn = [...document.getElementById( 'result' )
        .getElementsByClassName( 'coment-block__btn' )];
    
    comentBtn.forEach( (el, index) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            for (var i = 0; i < list.length; i++) {
                if (Number(e.target.name) == list[i].number) {
                    list[i]['coments'].push(article[i].value);
                    renderList( list,result );
                    liker(list);
                    comentator(list);
                };
            };
        });
    });
};comentator(blogList);

/*Likes counter*/
function liker(list,) {
    let resultBlock = [...document.getElementById( 'result' ).getElementsByTagName( 'span' )]
        .forEach( el => {
            el.addEventListener('click', e => {
            e.preventDefault();
            for (var i = 0; i < list.length; i++) {
                if (Number(el.className) == list[i].number) {
                    list[i].like++;
                    renderList( list, result);
                    liker(list);
                    comentator(list);
                };
            };
        });
    });
}; liker(blogList);


/* Pagination*/
function pagination(obj) {
    let k = 1;
    let pageSize = Math.ceil(obj.length/2+1);
    let mainBlock = document.querySelector('main');
    let pugBlock = document.getElementById( 'pagination-block' );
    pugBlock.innerHTML = '';
    while(k < pageSize) {
        let pugNum = document.createElement( 'a' );
            pugNum.innerHTML = k;
            pugNum.setAttribute('href', '#')
            pugBlock.appendChild(pugNum);
            k++;
    };

    let arrLink = [...pugBlock.querySelectorAll('a')];console.log(arrLink)
    // renderList(obj.slice(0, 2) ,result);
        arrLink.forEach( el => {console.log(arrLink.length)
            el.addEventListener('click', e => {
            e.preventDefault();
            for (let i = 0; i < arrLink.length; i++) {
                console.log(Number(e.target.text))
                if ( Number(e.target.text) == 1) {console.log(e.target.text)
                    renderList(obj.slice(Number(e.target.text)-1, Number(e.target.text)+1) ,result)
                    pagination(obj);
                } else {
                    renderList(obj.slice(Number(e.target.text), Number(e.target.text)+2) ,result)
                    pagination(obj);
                }
            }
        });
    });
};pagination(blogList);


/* Search on site*/
// document.querySelector('#search').oninput = function () {
//     // console.log(document.innerHTML)
//     let val = this.value.trim();
//     let elasticI = document.body.innerText;
//     // console.log(elasticI);
//     let elasticItems = [...document.querySelectorAll('body p')];
//     // console.log(elasticItems);
//     if (val != '') {
//         elasticItems.forEach(function (elem) {
//             // console.log(elem.innerText.toString(), val);
//             if (elem.innerText.search(val) == -1) {
//                 elem.innerHTML = elem.innerText;
//             }
//             else {
//                 let str = elem.innerText;
//                 // console.log(str)
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }    
//         });
//     }
//     else {
//         elasticItems.forEach(function (elem) {
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }

// function insertMark(string, pos, len) {
//     // hello world
//     // hello <mark>wo</mark>rld
//     // hello+<mark>+wo+</mark>+rld
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }

