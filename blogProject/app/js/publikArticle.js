/*Add new article*/
function publickArticle(user) {
    const pushBtn = document.getElementById( 'push_article' ),
        newTitle = document.getElementById( 'add-article__title' ),
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
    let addInTopic = filterVal( getValueSelect(selectValue.id),blogList );
    if (newArticle['topic'] == getValueSelect(selectValue.id)) {
        renderList( addInTopic, result, user );
        pagination(addInTopic, user);
        liker(addInTopic, user);
        comentator(addInTopic, user);
    } else if (getValueSelect(selectValue.id) == 'Выберите жанр') {
        renderList( blogList,result, user );
        pagination(blogList, user);
        liker(blogList.slice(0, 2), user);
        comentator(blogList.slice(0, 2), user);
    };

    newTitle.value = '';
    newPage.value = '';
    pushBtn.setAttribute('disabled', 'disabled')
};
document.getElementById( 'push_article' ).onclick = () => publickArticle(userLogged);