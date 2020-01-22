/*Delete coments*/
function deleteComent(arr, num) {
	const delElements = Array.from(document.getElementsByClassName('coment-block__delet'));
	// console.log(delElements)
    // arr.filter( el => el.number );
    delElements.forEach( (el,i) => {
    	// console.log('l')
    	el.addEventListener('click', e => {
        	e.preventDefault();
        	// console.log(e.target)

    	});
    })
}