let ham=document.getElementById('ham')
let close=document.getElementById('close')

ham.addEventListener('click',()=>{
    // document.getElementById('list').style.display='flex'

    document.getElementById('list').style.left='0'
    document.getElementById('ham').style.left='-50px'

    document.getElementById('right_a').style.left='-80px'
})

close.addEventListener('click',()=>{
    // document.getElementById('list').style.display='none'
    document.getElementById('list').style.left='-600px'
    document.getElementById('ham').style.left='0'
})

my_pic.addEventListener('load',()=>{
    document.getElementById('my_pic').style.left="0"
})

card1.addEventListener('mouseover',()=>{
    spotify.style.visibility='visible'
    spotify_t.style.textShadow="0px 0px 50px rgb(17, 184, 184)";
   
})

card1.addEventListener('mouseout',()=>{
    spotify.style.visibility='hidden';
    spotify_t.style.textShadow="none";
})

card2.addEventListener('mouseover',()=>{
    youtube.style.visibility='visible';
    youtube_t.style.textShadow="0px 0px 50px rgb(17, 184, 184)";

})

card2.addEventListener('mouseout',()=>{
    youtube.style.visibility='hidden';
    youtube_t.style.textShadow="none";

})

card3.addEventListener('mouseover',()=>{
    icoder.style.visibility='visible';
    icoder_t.style.textShadow="0px 0px 50px rgb(17, 184, 184)";

})

card3.addEventListener('mouseout',()=>{
    icoder.style.visibility='hidden';
    icoder_t.style.textShadow="none";

})


