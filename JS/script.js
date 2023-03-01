//Перше посилання
const suptitleItem1 = document.querySelector ('#suptitleItem1');
const block1 = document.querySelector ('.block1');

suptitleItem1.addEventListener ('click', getScroll1); 

function getScroll1() {
    block1.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//Друге посилання
const suptitleItem2 = document.querySelector ('#suptitleItem2');
const block2 = document.querySelector ('.block2');

suptitleItem2.addEventListener ('click', getScroll2); 

function getScroll2() {
    block2.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//третє посилання
const suptitleItem3 = document.querySelector ('#suptitleItem3');
const block3 = document.querySelector ('.block3');

suptitleItem3.addEventListener ('click', getScroll3); 

function getScroll3() {
    block3.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//четверте посилання
const suptitleItem4 = document.querySelector ('#suptitleItem4');
const block4 = document.querySelector ('.block4');

suptitleItem4.addEventListener ('click', getScroll4); 

function getScroll4() {
    block4.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//п'яте посилання
const suptitleItem5 = document.querySelector ('#suptitleItem5');
const block5 = document.querySelector ('.block5');

suptitleItem5.addEventListener ('click', getScroll5); 

function getScroll5() {
    block5.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
};

//--------------------ЗАДАЧІ--------------------//

function showMessage () {
    alert ("Hello!");
}

function getAge () {
    //code
}

function calcSum () {
    //code
}

function createForm () {
    //code
}

function checkPermission () {
    //code
}


showMessage (); // показує повідомлення
getAge (); // повертає вік
calcSum (); //обчислює суму і повертає результат
createForm (); //створює форму і зазвичай повертає її
checkPermission (); //щось перевіряє і повертає логічне значення