/*Add new article*/
function publickArticle( user ) {
    const pushBtn = document.getElementById( 'push_article' );
    const newTitle = document.getElementById( 'add-article__title' );
    const newPage = document.getElementById( 'add-article__page' );
    const selectValue = document.getElementById( 'select_heading' );
    const indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex;
    const select = document.getElementById( 'add-article__select_heading' );
    let addInTopic = filterVal( getValueSelect( selectValue.id ), blogList );
    const newArticle = {
        'number': blogList.length,
        'userPublicated': user,
        'topic': select.options[ indexSelect ].text,
        'title': newTitle.value,
        'time': new Date().getFullYear() + '-' + new Date().getMonth()+1 + '-' + new Date().getDate()+ ' ' + new Date().getHours() + ':' + new Date().getMinutes()+ ':' + new Date().getSeconds(),
        'like': 0,
        'coments': [],
        'page': newPage.value,
    };
    blogList.unshift( newArticle );
    localStorage.setItem('blogList', JSON.stringify(blogList));
    if ( newArticle[ 'topic' ] == getValueSelect( selectValue.id ) ) {
        renderList( addInTopic, result, user );
        pagination( addInTopic, user );
    } else if ( getValueSelect( selectValue.id ) == 'Select topic' ) {
        renderList( blogList,result, user );
        pagination( blogList, user );
    };

    newTitle.value = '';
    newPage.value = '';
    pushBtn.setAttribute( 'disabled', 'disabled' )
};
document.getElementById( 'push_article' ).onclick = () => publickArticle( userLogged, blogList );