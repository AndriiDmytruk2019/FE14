document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('header span');console.log(elasticItems);
    if (val != '') {
        elasticItems.forEach(function (elem) {
            console.log(elem.innerText.toString(), val);
            if (elem.innerText.search(val) == -1) {
                elem.innerHTML = elem.innerText;
            }
            else {
                let str = elem.innerText;
                console.log(str)
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.innerHTML = elem.innerText;
        });
    }
}

function insertMark(string, pos, len) {
    // hello world
    // hello <mark>wo</mark>rld
    // hello+<mark>+wo+</mark>+rld
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}


// document.querySelector('#search').oninput = function () {
//     let val = this.value.trim();
//      // let allText = document.body.innerText.split(' ');
//     // let allText = document.querySelectorAll('header');
//     let allText = document.querySelectorAll('body span');
//      console.log(allText)
//     if (val != '') {
//         allText.forEach(function (elem) {
//             // console.log(elem.innerText);
//             if (elem.innerText.search(val) == -1) {
//                 // alert('no')
//                 // elem.innerHTML = elem.innerText;
//             }
//             else {
//                 let str = elem.innerText;
//                 console.log(elem)
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }
//         });
//     }
// }

// function insertMark(string, pos, len) {
//     // hello world
//     // hello <mark>wo</mark>rld
//     // hello+<mark>+wo+</mark>+rld
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }