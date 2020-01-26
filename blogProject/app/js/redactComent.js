/*Edit coments*/
function editComent( obj, user ) {
	const createElements = [...document.querySelectorAll('div.coment-block__coment-user')];
	const innerElements = [...document.querySelectorAll('.coment-block__coment-user > p:nth-child(2)')];
	const pageClass = [...document.querySelectorAll('.coment-block__coment-user > p:last-child')];
	let inputRefresh;
    let inpuCreate;
    let target;

    innerElements.forEach( (el,i) => {
        el.onclick = (e) => {
        	inputRefresh = document.createElement('button');
        	inpuCreate = document.createElement('input');
        	inpuCreate.className = pageClass[i].className
        	inpuCreate.id = pageClass[i].id
        	inpuCreate.setAttribute('type', 'text')
        	inpuCreate.value = innerElements[i].innerHTML;
        	inputRefresh.innerText = 'Refresh';
	    	createElements[i].appendChild(inpuCreate);
	    	createElements[i].appendChild(inputRefresh)
            target = e.target;
            inputRefresh.onclick = () => {
            	if (inpuCreate.className == pageClass[i].className) {
	                blogList[inpuCreate.className].coments[inpuCreate.id]['page'] = inpuCreate.value;
	                console.log(blogList);
	                inputRefresh.style.display = 'none';
      				inpuCreate.style.display = 'none';
	                renderList( obj, result, user);
            	}
            }
        };
    })
};