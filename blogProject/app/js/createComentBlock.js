/*Create coment block*/
function createBlogBlock( list, el, user ) {
    list.forEach(obj =>{
    let new_block = document.createElement( 'div' ),
        time = document.createElement( 'p' ),
        linkWriter = document.createElement( 'a' ),
        title = document.createElement( 'h2' ),
        page = document.createElement( 'p' ),
        like = document.createElement( 'span' ),
        sentBlock = document.createElement( 'div' ),
        coment = document.createElement( 'div' ),
        link = document.createElement( 'a' ),
        forComent = document.createElement( 'textarea' ),
        btnComent = document.createElement( 'button' );
        new_block.className = 'result__render-article'
        time.className = 'time'
        like.className = obj.number;
        page.className = 'article'
        coment.className = 'coment-block';
        btnComent.className = 'coment-block__btn';
        forComent.name = obj.number;
        btnComent.name = obj.number;
        new_block.appendChild( title );
        new_block.appendChild(linkWriter);
        new_block.appendChild( time );
        new_block.appendChild( page );
        new_block.appendChild( like );
        new_block.appendChild( sentBlock );
        new_block.appendChild( coment );
        coment.appendChild( link );
        coment.appendChild( forComent );
        coment.appendChild( btnComent );
        linkWriter.innerHTML = obj.userPublicated;
        time.innerHTML = obj.time;
        title.innerHTML = obj.title;
        page.innerText = obj.page;
        link.innerHTML = user;
        like.innerText = obj.like;
        btnComent.innerHTML = 'Прокоментировать';
        el.appendChild( new_block );
        createComentBlock( obj, user, coment )
    });
};

function createComentBlock( obj, user, block ) {
    obj.coments.forEach( ( el,i ) => {
            listComent = document.createElement( 'div' );
            linkUser = document.createElement( 'a' );
            sentComent = document.createElement( 'p' );
            delComent = document.createElement( 'p' );
            listComent.className = 'coment-block__coment-user';
            sentComent.className = obj.number;
            sentComent.id = obj.coments[i].id;
            delComent.className = obj.number;
            delComent.id = obj.coments[i].id;
            listComent.appendChild(linkUser);
            listComent.appendChild(sentComent);
            listComent.appendChild( delComent );
            block.appendChild( listComent );
            linkUser.innerHTML = el.user;
            sentComent.innerHTML = el.page;
            delComent.innerHTML = 'Del';

    });
};