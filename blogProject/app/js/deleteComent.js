/*Delete coments*/
function deleteComent( arr, user ) {
	const delElements = [...document.getElementsByClassName('coment-block__coment-user')];
    let target,
        targetId;

    delElements.forEach( ( el, i )  => {
        el.onclick = (e) => {
            target = Number(e.target.className);
            targetId = Number(e.target.id);
            if (target == blogList[target].number) {
                blogList[target].coments.splice(targetId, 1);
                renderList( arr, result);
                pagination(arr, user);
                comentator(arr, user);
                liker(arr, user);
                deleteComent(arr, user);
            }
        };
    })
}