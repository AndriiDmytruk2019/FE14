// /*Change value*/
function getValueSelect( id ) {
    const indexSelect = document.getElementById( id ).options.selectedIndex;
    const select = document.getElementById( id );
    return select.options[ indexSelect ].text;
};

function selectHeading( user, state ) {
    let new_arr_heading;
    document.getElementById( 'select_heading' ).addEventListener( 'change', e => {
        e.preventDefault();
        new_arr_heading = filterVal( getValueSelect( e.target.id ), blogList );
        if ( getValueSelect( e.target.id ) == 'Select topic') {
            renderList( blogList.slice( 0, 5 ), result, user, state );
            pagination( blogList, user );
        } else {
            renderList( new_arr_heading, result, user, state);
            pagination( new_arr_heading, user );
        };
        if ( getValueSelect( e.target.id ) == 'Show all' ) {
            renderList( blogList, result, user, state );
        };
    });
};

function selectTime( user, state ) {
    document.getElementById( 'select_time' ).addEventListener( 'change', e => {
        e.preventDefault();
        const indexSelect = document.getElementById( 'select_heading' );
        const new_arr_time = filterVal( getValueSelect( indexSelect.id ), blogList );

        if ( getValueSelect( indexSelect.id ) == 'Select topic' ) {
            sortTime( blogList, getValueSelect( e.target.id ) );
            renderList( blogList.slice( 0, 5 ),result, user, state );
            pagination( blogList, user );
        } else {
            sortTime( new_arr_time, getValueSelect( e.target.id ) );
            renderList( new_arr_time, result, user, state);
            pagination( new_arr_time, user )
        }
    });
};