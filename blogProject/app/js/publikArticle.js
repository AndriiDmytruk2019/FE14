/*Add new article*/
function publickArticle( user ) {
    const pushBtn = document.getElementById( 'push_article' );
    const newTitle = document.getElementById( 'add-article__title' );
    const newImage = document.getElementById( 'add-article__image' );
    // console.log(newImage.value.split('\\').reverse()[0]);
    // const reg = /C:\\fakepath/;
    // let newstr = newImage.value.replace(reg, '');
    let newImgSrc = newImage.value.split('\\').reverse()[0];
    const newPage = document.getElementById( 'add-article__page' );
    const selectValue = document.getElementById( 'select_heading' );
    let indexSelect = document.getElementById( 'add-article__select_heading' );
    const select = document.getElementById( 'add-article__select_heading' );
    let addInTopic;
    const newArticle = {
        'number': blogList.length,
        'userPublicated': user,
        'topic': select.options[ indexSelect.options.selectedIndex ].text,
        'image': '../img/' + newImgSrc,
        'title': newTitle.value,
        'time': new Date().getFullYear() + '-' + new Date().getMonth()+1 + '-' + new Date().getDate()+ ' ' + new Date().getHours() + ':' + new Date().getMinutes()+ ':' + new Date().getSeconds(),
        'like': 0,
        'coments': [],
        'page': newPage.value,
    };
    blogList.unshift( newArticle );
    localStorage.setItem('blogList', JSON.stringify(blogList));
    if ( newArticle[ 'topic' ] == getValueSelect( selectValue.id ) ) {
        addInTopic = filterVal( getValueSelect( selectValue.id ), blogList );
        newTitle.value = '';
        newPage.value = '';
        indexSelect.options.selectedIndex = 0;
        pagination( addInTopic, user );
        renderList( addInTopic, result, user );
    } else if ( getValueSelect( selectValue.id ) == 'Select topic' ) {
        newTitle.value = '';
        newPage.value = '';
        indexSelect.options.selectedIndex = 0;
        renderList( blogList,result, user );
        pagination( blogList, user );
    };

    pushBtn.style.height = '10px'
    pushBtn.style.fontSize = '0'
    pushBtn.style.transition = '1s'
    newImage.value = '';
    pushBtn.disabled = true;
};
document.getElementById( 'push_article' ).onclick = () => publickArticle( userLogged, blogList );