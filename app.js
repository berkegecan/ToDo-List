// Add Item
const addItem = document.querySelector('#itemAdd');


addItem.addEventListener('click',function(){
  const value = document.querySelector('input');
  const li = document.createElement('li');
  if(value.value != ''){
    li.appendChild(document.createTextNode(value.value));
    const a = document.createElement('a');
    a.setAttribute('href','');
    a.innerHTML = '<i class ="fa fa-remove"></i>';
    li.appendChild(a);
    document.querySelector('ul').appendChild(li);
    value.value='';
  }
});

// Delete All Items
const deleteItems = document.querySelector('#deleteAll');

deleteItems.addEventListener('click',function(){
  const del = document.querySelectorAll('li');
  del.forEach(function(item){
    item.remove();
  });
});

// Delete Item
const ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
  if(e.target.className === 'fa fa-remove'){
    e.target.parentElement.parentElement.remove();
    e.preventDefault();
  }
});