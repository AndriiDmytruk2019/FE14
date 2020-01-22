/*Filter blog*/
function filterVal( val,list ) {
    return list.filter( item => {
    if( item.topic.indexOf( val ) != -1 )
        return item;
    })
};