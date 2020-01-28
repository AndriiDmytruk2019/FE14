/*Change value*/
function getValueSelect( id ) {
    const indexSelect = document.getElementById( id ).options.selectedIndex;
    const select = document.getElementById( id );
    return select.options[ indexSelect ].text;
};

function selectHeading() {
    let new_arr_heading;
    document.getElementById( 'select_heading' ).addEventListener( 'change', e => {
        e.preventDefault();
        new_arr_heading = filterVal( getValueSelect( e.target.id ), blogList );
        if ( getValueSelect( e.target.id ) == 'Select topic' ) {
            renderList( blogList.slice( 0, 2 ), result, userLogged );
            pagination( blogList, userLogged );
            // liker( blogList.slice( 0, 2 ), userLogged );
            // comentator( blogList.slice( 0, 2 ), userLogged );
            // deleteComent( blogList.slice(0, 2), userLogged );
        } else {
            renderList( new_arr_heading, result, userLogged );
            pagination( new_arr_heading, userLogged );
            // liker( new_arr_heading, userLogged );
            // comentator( new_arr_heading, userLogged );
            // deleteComent( new_arr_heading, userLogged );
        }
    });
};selectHeading();

function selectTime() {
    document.getElementById( 'select_time' ).addEventListener( 'change', e => {
        e.preventDefault();
        const indexSelect = document.getElementById( 'select_heading' );
        const new_arr_time = filterVal( getValueSelect( indexSelect.id ), blogList );

        if ( getValueSelect( indexSelect.id ) == 'Select topic' ) {
            sortTime( blogList, getValueSelect( e.target.id ) );
            renderList( blogList.slice( 0, 2 ),result, userLogged );
            pagination( blogList, userLogged );
        } else {
            sortTime( new_arr_time, getValueSelect( e.target.id ) );
            renderList( new_arr_time, result ,userLogged );
            pagination( new_arr_time, userLogged )
        }
    });
};selectTime();
