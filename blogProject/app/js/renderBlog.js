/*Render blog*/
// const result  = document.getElementById( 'result' );
function renderList( list, el, user ){
    el.innerHTML='';
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
        like.className = obj.number;
        coment.className = 'coment-block';
        btnComent.className = 'coment-block__btn';
        forComent.name = obj.number;
        btnComent.name = obj.number;
        new_block.appendChild(linkWriter);
        new_block.appendChild( title );
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
        obj.coments.forEach( (el,i) => {
            listComent = document.createElement( 'div' );
            linkUser = document.createElement( 'a' );
            sentComent = document.createElement( 'p' );
            delComent = document.createElement( 'span' );
            delComent.className = 'coment-block__delet';
            listComent.appendChild(linkUser);
            listComent.appendChild(sentComent);
            listComent.appendChild( delComent );
            coment.appendChild( listComent );
            linkUser.innerHTML = el.user;
            sentComent.innerHTML = el.page;
            delComent.innerHTML = 'Del';

        });
        btnComent.innerHTML = 'Прокоментировать';
        el.appendChild( new_block );
  });
};