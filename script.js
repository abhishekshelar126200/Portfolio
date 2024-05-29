let ham=document.getElementById('ham')
let close=document.getElementById('close')

ham.addEventListener('click',()=>{
    // document.getElementById('list').style.display='flex'

    document.getElementById('list').style.left='0'
})

close.addEventListener('click',()=>{
    // document.getElementById('list').style.display='none'
    document.getElementById('list').style.left='-600px'
})