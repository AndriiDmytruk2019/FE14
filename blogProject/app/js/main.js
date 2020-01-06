let blogList = [
    {
        topic: 'Спорт',
        title: 'Лучшая украинская теннисистка.',
        time: '12.45',
        page: 'Лучшая украинская теннисистка Элина Свитолина (№5 WTA) начала новый сезон с поражения на хардовом Премьере в Брисбене.'
    },
    {
        topic: 'Спорт',
        title: 'МЧМ по хоккею.',
        time: '13.20',
        page: 'В финале Канада в напряженном матче обыграла Россию, хотя североамериканская сборная по ходу встречи проигрывала 0:1 и 1:3, однако сделала камбэк.'
    },
    {
        topic: 'Бали',
        title: 'Виды на Бали',
        time: '13.50',
        page: 'Лучшее место для жини!'
    }
];

function getValue () {
    let indexSelect = document.getElementById("select_heading").options.selectedIndex;
    let select = document.getElementById("select_heading");
    let value = select.options[indexSelect].text;
    console.log(value);
};

const result = document.getElementById('result');
renderList(blogList,result);
function filter(val,list){
let result=[];
  list.forEach(i=>{
    if(i.indexOf(val)!=-1)
      result.push(i)
  })
return result;
};

function renderList(list,el){
  list.forEach(i=>{
    let new_block = document.createElement('div');
    let title = document.createElement('h2');
    let page = document.createElement('p');
    new_block.appendChild(title);
    new_block.appendChild(page);
    title.innerHTML = i.topic;
    page.innerHTML = i.page;
    el.appendChild(new_block);
  })
};


document.querySelector('#search').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('header span');
    console.log(elasticItems);
    if (val != '') {
        elasticItems.forEach(function (elem) {
            console.log(elem.innerText.toString(), val);
            if (elem.innerText.search(val) == -1) {
                elem.innerHTML = elem.innerText;
            }
            else {
                let str = elem.innerText;
                // console.log(str)
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
