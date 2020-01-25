/*Delete coments*/
function deleteComent( arr, user ) {
	const delElements = [...document.getElementsByClassName('coment-block__coment-user')];
    let target,
        blogIndex,
        targetId;

    delElements.forEach( el => {
        el.onclick = (e) => {
            target = Number(e.target.className);
            blogIndex = blogList.findIndex( el => el.number == target );
            targetId = blogList[target].coments.findIndex( el => el.id == Number(e.target.id) );
            // if (target == blogList[target].number) {
                blogList[blogIndex].coments.splice(targetId, 1);
                renderList( arr, result, user);
                // pagination( arr, userLogged );
                comentator(arr, user);
                liker(arr, user);
                deleteComent(arr, user);
            // }
        };
    })
}