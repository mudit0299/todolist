

$(()=>{
    let mylist=$('#mylist')
    let input=$('#input')
    $('#add').click(()=>{
    
var q=document.createElement('li')
q.innerText=input.val()
var edit=document.createElement('button')
edit.innerText='EDIT'
q.append(edit)
var del=document.createElement('button')
del.className='abc';
del.innerText='DELETE'
q.appendChild(del)


mylist.append(q);
input.setval="";
$('.abc').click((e)=>{
    console.log("deleted")
console.log(e)
    e.target.parentElement.remove();
});
    })
   
    
    
})