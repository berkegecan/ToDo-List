// Get Info
const addItem = document.querySelector('#itemAdd');
// const textValue = document.querySelector('#order').value;
// console.log(textValue);
const textValue = '';

// Create Li
function createli(){
  const value = document.querySelector('#order');
  const li = document.createElement('li');
  if(value.value != ''){
    const label1 = document.createElement('label');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    label1.appendChild(checkbox);
    label.appendChild(document.createTextNode(value.value));
    label1.appendChild(label);
    li.appendChild(label1);
    const a = document.createElement('a');
    a.setAttribute('href','');
    a.innerHTML = '<i class ="fa fa-remove"></i>';
    li.appendChild(a);
    document.querySelector('ul').appendChild(li);
    value.value='';
  }
}

addItem.addEventListener('click',createli);

// Show UnChecked
const showUnchecked = document.querySelector('#showUnchecked');

showUnchecked.addEventListener('click', function(){
  const show = document.querySelectorAll('input[type="checkbox"]');
  for (var i=0; i<show.length;i++){
    if(show[i].checked == false){
      show[i].parentElement.parentElement.classList.remove('display');
    }
  }

  const unshow = document.querySelectorAll('input[type="checkbox"]:checked');
  unshow.forEach(function(item){
    item.parentElement.parentElement.className = 'display';
  });
});

// Show Checked
const showChecked = document.querySelector('#showChecked');

showChecked.addEventListener('click', function(){
  const unshow = document.querySelectorAll('input[type="checkbox"]:checked');
  unshow.forEach(function(item){
    item.parentElement.parentElement.classList.remove('display');
  });
  
  const show = document.querySelectorAll('input[type="checkbox"]');
  for (var i=0; i<show.length;i++){
    if(show[i].checked == false){
      show[i].parentElement.parentElement.className = 'display';
    }
  }
});

// Show All
const showAll = document.querySelector('#showAll');

showAll.addEventListener('click', function(){
  const allShow = document.querySelectorAll('input[type="checkbox"]');
  allShow.forEach(function(item){
    item.parentElement.parentElement.classList.remove('display');
  });
});

// Delete All Items
const deleteItems = document.querySelector('#deleteAll');

deleteItems.addEventListener('click',function(){
  const del = document.querySelectorAll('input[type="checkbox"]:checked');
  del.forEach(function(item){
    item.parentElement.parentElement.remove();
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