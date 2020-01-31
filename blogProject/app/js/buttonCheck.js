/*Btn Active*/
function btnActive() {
    let indexSelect = document.getElementById( 'add-article__select_heading' ).options.selectedIndex,
        select = document.getElementById( 'add-article__select_heading' ).options[ indexSelect ].value,
        btnPush = document.getElementById( 'push_article' ),
        newTitle = document.getElementById( 'add-article__title' ).value,
        newPage = document.getElementById( 'add-article__page' ).value;
        // btnPush.setAttribute('disabled', 'disabled');
        // btnPush.setAttribute('disabled', 'true');
        console.log(btnPush)
    if (newTitle !== '' && newPage !== '' && select !== 'Select topic') {
        btnPush.style.height = '35px'
        btnPush.style.fontSize = '11px'
        btnPush.style.transition = '1s'
        // btnPush.disabled = false
    }
};
document.getElementById( 'add-article__select_heading' ).onchange= () => btnActive();