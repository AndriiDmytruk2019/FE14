/* Search on site*/

function searchOnSite() {
    
}

// document.querySelector('#search').oninput = function () {
//     let val = this.value.trim();
//     let elasticI = document.body.innerText;
//     let elasticItems = [...document.querySelectorAll('body p'),
//          ...document.querySelectorAll('body h2'),
//          ...document.querySelectorAll('body span')];

//     if (val != '') {
//         elasticItems.forEach(function (elem) {
//             console.log(elem.innerText.toString(), val);
//             if (elem.innerText.search(val) == -1) {
//                 elem.innerHTML = elem.innerText;
//             }
//             else {
//                 let str = elem.innerText;
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }    
//         });
//     }
//     else {
//         elasticItems.forEach(function (elem) {
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }