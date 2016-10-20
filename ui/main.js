console.log('Loaded!');
var button=document.getElementById('counter');

button.onclick=function(){
counter = counter+1;
var span=document.getElementById('count');
span.innerHTML=counter.toString();
};
var nameInput=document.getElementById('name');
var name=nameInput.value ;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){ 
    var names=['name1','name2','name3'];
    var list ='';
    for(i=0;i<name.length;i++) {list+='<li>'+ names[i]+'</li>'}
    
var ul =document.getElementById('namelist');
ul.innerHTML='list';
    
};