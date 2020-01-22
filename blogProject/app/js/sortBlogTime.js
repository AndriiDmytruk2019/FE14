/*Sort time*/
function sortTime( list, time ) {
    if ( time == 'Самые новые' ) {
        return list.sort( ( a,b ) => new Date( b.time ).getTime() - new Date( a.time ).getTime() );
    } else if ( time == 'Давно написанные' ) {
        return list.sort( ( a,b ) => new Date( a.time ).getTime() - new Date( b.time ).getTime())
    } else if ( time == 'Популярные') {
        return list.sort( ( a,b ) => b.like - a.like );
    } else if ( time == 'Непопулярные' ) {
        return list.sort( (a,b) => a.like - b.like );
    }
};