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
        pagination(blogList);
        renderList( blogList,result );  
        liker(blogList);
        comentator(blogList);
    } else {
        pagination(new_arr_heading);
        renderList( new_arr_heading, result );
        liker(new_arr_heading);
        comentator(new_arr_heading);

    }
});

document.getElementById( 'select_time' ).addEventListener('change',e => {
    e.preventDefault();
    let indexSelect = document.getElementById( 'select_heading' );
    let new_arr_time = filterVal( getValueSelect(indexSelect.id), blogList );

    if (getValueSelect(indexSelect.id) == 'Выберите жанр') {
        sortTime(blogList, getValueSelect(e.target.id));
        pagination(blogList);
        renderList( blogList,result );
        liker(blogList);
        comentator(blogList);
    } else {
        sortTime(new_arr_time, getValueSelect(e.target.id));
        pagination(new_arr_time)
        renderList( new_arr_time, result );
        liker(new_arr_time);
        comentator(new_arr_time);
    }
});