/*Btn Active*/
function btnActive() {
    let indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' )
                    .options[indexSelect].value,
        btnPush = document.getElementById( 'push_article' ),
        newTitle = document.getElementById( 'add-article__title' ).value,
        newPage = document.getElementById( 'add-article__page' ).value;
        newTitle.onchange = (e) => console.log(e.target.value) ;
    return newTitle !== '' && newPage !== '' ? btnPush.disabled = false : btnPush.disabled = true;
};
document.getElementById( 'add-article__select_heading' ).onchange= () => btnActive();