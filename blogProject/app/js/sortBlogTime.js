/*Sort time*/
function sortTime( list, time ) {
    if ( time == 'The newest' ) {
        return list.sort( ( a,b ) => new Date( b.time ).getTime() - new Date( a.time ).getTime() );
    } else if ( time == 'The old' ) {
        return list.sort( ( a,b ) => new Date( a.time ).getTime() - new Date( b.time ).getTime())
    } else if ( time == 'Popular') {
        return list.sort( ( a,b ) => b.like - a.like );
    } else if ( time == 'Unpopular' ) {
        return list.sort( (a,b) => a.like - b.like );
    }
};