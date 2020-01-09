let blogList = [
    {
        topic: 'Спорт',
        title: 'Лучшая украинская теннисистка.',
        time: '2019-02-6 00:20:18',
        like: 0,
        page: 'Лучшая украинская теннисистка Элина Свитолина (№5 WTA) начала новый сезон с поражения на хардовом Премьере в Брисбене.'
    },
    {
        topic: 'Спорт',
        title: 'МЧМ по хоккею.',
        time: '2019-12-21 00:20:18',
        like: 0,
        page: 'В финале Канада в напряженном матче обыграла Россию, хотя североамериканская сборная по ходу встречи проигрывала 0:1 и 1:3, однако сделала камбэк.'
    },
    {
        topic: 'Путешествие',
        title: 'Виды на Бали',
        time: '2019-11-28 01:20:18',
        like: 0,
        page: 'Лучшее место для жини!'
    },
    {
        topic: 'Путешествие',
        title: 'Лучшее где я был',
        time: '2018-10-14 01:20:18',
        like: 0,
        page: 'Places'
    },
    {
        topic: 'Музыка',
        title: 'Смоки Мо представит «Стейкхаус»',
        time: '2019-03-31 02:20:18',
        like: 0,
        page: 'Концерт Смоки Мо состоится 4 апреля 2020 года в «Известия Hall». Рэпер представит композиции со своего недавнего альбома «Стейкхаус», а также лучшие песни с предыдущих восьми пластинок.'
    }
];

sortTime(blogList, getValueTime());
renderList( blogList,result );
liker();

/*Add new article*/
function publickArticle() {
    let newArticle = {},
        btnPush = document.getElementById( 'push_article' ),
        newTitle= document.getElementById( 'add-article__title' ).value,
        newPage = document.getElementById( 'add-article__page' ).value,
        indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' );
    newArticle['topic'] = select.options[indexSelect].text;
    newArticle['title'] = newTitle;
    newArticle['time'] = new Date().getFullYear() + '-' + new Date().getMonth()+1 + '-' + new Date().getDate()+ ' ' + new Date().getHours() + ':' + new Date().getMinutes()+ ':' + new Date().getSeconds();
    newArticle['like'] = 0;
    newArticle['page'] = newPage;
    
    if (newArticle['topic']  == getValueHeading()) {
        blogList.unshift(newArticle);
        let addInTopic = filterVal( getValueHeading(),blogList );
        renderList( addInTopic,result );
    } else {
        blogList.unshift(newArticle);
        renderList( blogList,result );
    };
    liker();
    newTitle= document.getElementById( 'add-article__title' ).value = '';
    newPage = document.getElementById( 'add-article__page' ).value = '';
};

/*Filter blog*/
function getValueHeading() {
    let indexSelect = document.getElementById( 'select_heading' ).options.selectedIndex;
    let select = document.getElementById( 'select_heading' );
    let value = select.options[indexSelect].text;
    return value;
};

function getValueTime() {
    let indexSelect = document.getElementById( 'select_time' ).options.selectedIndex;
    let select = document.getElementById( 'select_time' );
    let value = select.options[indexSelect].text;
    return value;
};

function filterVal(val,list){
    let result = blogList.filter(item => {
    if( item.topic.indexOf(val) != -1 )
        return item;
    });
    // let result=[];
  //   list.forEach( obj => {
  //   if(obj.topic.indexOf(val) != -1)
  //       result.push(obj)
  // });
    return result;
};

function sortTime (list, time){
    if (time == 'Самые новые') {
        return list.sort((a,b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } else if (time == 'Давно написанные') {
        return list.sort((a,b) => new Date(a.time).getTime() - new Date(b.time).getTime())
    }
};
/*Render blog*/
// const result  = document.getElementById( 'result' );
function renderList(list,el){
    el.innerHTML='';
    list.forEach(obj =>{
        let new_block = document.createElement( 'div' ),
            time = document.createElement( 'span' ),
            title = document.createElement( 'h2' ),
            page = document.createElement( 'p' ),
            like = document.createElement( 'span' ),
            coment = document.createElement( 'div' ),
            link = document.createElement( 'a' ),
            forComent = document.createElement( 'textarea' );
        like.className = 'like_count';
        new_block.appendChild( title );
        new_block.appendChild( time );
        new_block.appendChild( page );
        new_block.appendChild( like );
        new_block.appendChild( coment );
        coment.appendChild( link );
        coment.appendChild( forComent );
        time.innerHTML = obj.time;
        title.innerHTML = obj.title;
        page.innerHTML = obj.page;
        like.innerHTML = obj.like;
        el.appendChild( new_block );
  })
};

document.getElementById( 'select_heading' ).addEventListener('change',e => {
    e.preventDefault();
    let new_arr_heading = filterVal( getValueHeading(),blogList );
    renderList( new_arr_heading, result );
    if (getValueHeading() == 'Выберите жанр') {
        renderList( blogList,result );
    }
    liker();
});

document.getElementById( 'select_time' ).addEventListener('change',e => {
    e.preventDefault();
    let new_arr_heading = filterVal( getValueHeading(),blogList );
    sortTime(new_arr_heading, getValueTime());
    renderList( new_arr_heading,result );
    if (getValueHeading() == 'Выберите жанр') {
        sortTime(blogList, getValueTime());
        renderList( blogList,result );
    };
    liker();
});

/*Btn Active*/
function btnActive() {
    let indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' ),
        btnPush = document.getElementById( 'push_article' ),
        selectText = select.options[indexSelect].text,
        newTitle = document.getElementById( 'add-article__title' ).value,
        newPage = document.getElementById( 'add-article__page' ).value;
    if (selectText !== 'Выберите жанр') {
        console.log(newTitle, newPage)
        btnPush.disabled = false;
    } else {
        btnPush.disabled = true;
    }
};


/*Add Coments*/
function comentator() {

}

/*Likes counter*/
function liker() {
    let likeBtn =[...document.getElementsByClassName( 'like_count' )];
    likeBtn.forEach( (el, index) => { 
        console.log(el, index)
        el.addEventListener('click', e => {
            e.preventDefault();
            blogList[index].like++;
            el.innerText++
        });
    });console.log(blogList)
};

/* Search on site*/
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
