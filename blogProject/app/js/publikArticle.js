/*Add new article*/
function publickArticle() {
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
    if (newArticle['topic'] == getValueSelect(selectValue.id)) {
        let addInTopic = filterVal( getValueSelect(selectValue.id),blogList );
        pagination(addInTopic, 0);
        renderList( addInTopic,result );
        liker(addInTopic);
        comentator(addInTopic);
    } else if (getValueSelect(selectValue.id) == 'Выберите жанр') {
        renderList( blogList,result );
        pagination(blogList, 0);
        liker(blogList);
        comentator(blogList);
    };

    newTitle.value = '';
    newPage.value = '';
    pushBtn.setAttribute('disabled', 'disabled')
};
document.getElementById( 'push_article' ).onclick = () => publickArticle();