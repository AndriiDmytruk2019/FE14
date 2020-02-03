/*Btn Active*/
function btnActive() {
    let indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' ).options[ indexSelect ].value,
        btnPush = document.getElementById( 'push_article' ),
        newTitle = document.getElementById( 'add-article__title' ).value,
        newPage = document.getElementById( 'add-article__page' ).value;
    if (newTitle !== '' && newPage !== '' && select !== 'Select topic') {
        btnPush.style = 'height: 35px; fontSize: 11px; transition: 1s;'
        btnPush.disabled = false
    };
};
document.getElementById( 'add-article__select_heading' ).onchange = () => btnActive();