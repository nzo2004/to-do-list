let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

//Tıkladığımız da bu fonksiyon çalışsın demek
addToDoButton.addEventListener('click', function(){
    // p Elementi yaratmak için kullanılır
    let paragraph = document.createElement('p');

    //Child eleman olarak eklenir yani yeni eklenecek eleman bi alta eklenir
    toDoContainer.appendChild(paragraph);

    //text verisini html ekle deriz
    paragraph.innerHTML=inputText.value;

    inputText.value='';

    //eleman eklemek için kullanılır
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    });

    //Silmek için kullanılır
    paragraph.addEventListener('click',function() {
            toDoContainer.removeChild(paragraph);
        }
    );

    //Display none ile hepsini siler
    clearToDo.addEventListener('click',function(){
        paragraph.style.display='none';
    })
})