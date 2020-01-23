/*Change value*/
function getValueSelect( id ) {
    let indexSelect = document.getElementById( id ).options.selectedIndex;
    let select = document.getElementById( id );
    let value = select.options[indexSelect].text;
    return value;
};

document.getElementById( 'select_heading' ).addEventListener('change',e => {
    e.preventDefault();
    let new_arr_heading = filterVal( getValueSelect(e.target.id),blogList );
    if (getValueSelect(e.target.id) == 'Выберите жанр') {
        pagination(blogList, userLogged);
        renderList( blogList.slice(0, 2), result, userLogged);  
        liker(blogList.slice(0, 2), userLogged);
        comentator(blogList.slice(0, 2), userLogged);
    } else {
        pagination(new_arr_heading, userLogged);
        renderList( new_arr_heading, result, userLogged);
        liker(new_arr_heading, userLogged);
        comentator(new_arr_heading, userLogged);
    }
});

document.getElementById( 'select_time' ).addEventListener('change',e => {
    e.preventDefault();
    let indexSelect = document.getElementById( 'select_heading' );
    let new_arr_time = filterVal( getValueSelect(indexSelect.id), blogList );

    if (getValueSelect(indexSelect.id) == 'Выберите жанр') {
        sortTime(blogList, getValueSelect(e.target.id));
        pagination(blogList, userLogged);
        renderList( blogList.slice(0, 2),result, userLogged );
        liker(blogList.slice(0, 2), userLogged);
        comentator(blogList.slice(0, 2), userLogged);
    } else {
        sortTime(new_arr_time, getValueSelect(e.target.id));
        pagination(new_arr_time, userLogged)
        renderList( new_arr_time, result ,userLogged);
        liker(new_arr_time, userLogged);
        comentator(new_arr_time, userLogged);
    }
});