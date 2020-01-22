/*Change status*/
function stateStatus (state = false) {
    if (state == true) {
        document.querySelector('main').style.display = 'block';
        renderList( blogList,result )
    }
};