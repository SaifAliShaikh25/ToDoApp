// var button = document.getElementById('change-background')
// var button2 = document.getElementById('change-background2')
// var button3 = document.getElementById('change-background3')
// var button4 = document.getElementById('change-background4')

// button.addEventListener('click', function()
// {
//     document.body.style.backgroundColor='tomato';
// })

// button2.addEventListener('dblclick', function()
// {
//     document.body.style.backgroundColor='Pink';
// })

// button3.addEventListener('mouseenter', function()
// {
//     document.body.style.backgroundColor='Orange';
// })

// button4.addEventListener('mouseout', function()
// {
//     document.body.style.backgroundColor='yellow';
// })


// var button = document.getElementById("clear")

// button.addEventListener('click', function()
// {
//     alert('You clicked the button')
//     console.log("Button is clicked")
// })

var formField = document.querySelector('form');

var input = document.getElementById('user-todo');
var list = document.querySelector('ul');

//var todosArray = [];

var todosArray = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
localStorage.setItem('todos',JSON.stringify(todosArray))
var storage = JSON.parse(localStorage.getItem('todos'))

formField.addEventListener('submit', function(e)
{
    //e is event which prevents the whole page from refreshing
    e.preventDefault();

    //localStorage
    todosArray.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todosArray))

    //Two methods are used. One is with todoMaker function and second is in the eventListener function itself
    
    todoMaker(input.value);
    input.value='';
    console.log("Form submitted");
    // items.textContent=input.value
    // list.appendChild(items)
});

var todoMaker = function(text)
{
    var items = document.createElement('li');   
    items.textContent = text;
    list.appendChild(items)
}

//Logic to get previous list displayed after refresh

var i=0;
while(i<storage.length)
{
    todoMaker(storage[i])
    i++;
}

//Adding logic for clear

var button = document.getElementById('clear')

button.addEventListener('click', function(e)
{
    e.preventDefault();
    localStorage.clear();
    while(list.firstChild)
    {
        list.removeChild(list.firstChild)
    }
    console.log("Todo List cleared")
})


