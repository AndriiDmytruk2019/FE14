/* Search on site*/
document.querySelector('#search').oninput = function search() {
    let val = this.value.trim();
    let arrSearch = blogList.filter( el => { 
        return el.page.search(val) !== -1;
    });
    renderList( arrSearch, result, userLogged);
    pagination( arrSearch, userLogged );
};

