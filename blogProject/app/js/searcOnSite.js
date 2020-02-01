/* Search on site*/
document.querySelector('#search').oninput = function search() {
    let val = this.value.toLowerCase().trim();
    let arrSearch = blogList.filter( el => { 
        return el.page.toLowerCase().search(val) !== -1 && el.title.toLowerCase().search(val) !== -1;
    });
    renderList( arrSearch, result, userLogged);
    pagination( arrSearch, userLogged );
};

