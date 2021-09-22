//Message

window.addEventListener('load',(ev)=>{
    let togle=false;
    let message=document.getElementById('message-icon');
    message.addEventListener('click',(event)=>{
        togle = !togle
        if(togle){
        message.setAttribute('class', 'fas fa-angle-up')
        document.querySelector('.footter-body').style.display='block'
        }else{
            message.setAttribute('class', 'fas fa-angle-down')
            document.querySelector('.footter-body').style.display='none'
        }
    })
})

//message input

let fotinp=document.getElementById('footerinp');

function setValue(val){
    if(val.type === 'keypress'){
        if(val.which == 13 || val.keyCode == 13 ){

          let creatSpan = document.createElement('span');

          let userMessage= document.querySelector('.user-message');
          
          let inpValue=document.getElementById('footerinp').value;

          creatSpan.innerText=inpValue;

          userMessage.appendChild(creatSpan);
        }
    }
}


fotinp.addEventListener('click', setValue);

//remove post

let togle=false;
let elips=document.querySelectorAll('#elips');

elips.forEach(el =>{
    el.addEventListener('click', ()=>{
        togle = !togle
        if(togle){
         document.querySelector('.remove').style.display='block';
        }else{
            document.querySelector('.remove').style.display='none';
        }
    })
},false)

function remove(){
    let parent=document.querySelector('.container-center')
    let child=document.querySelector('.div3')

    parent.removeChild(child);
    
}

let rem=document.getElementById('remove');
rem.addEventListener('click',remove);

//like button
 let liketext=document.querySelector('.liketext'),
    likebtn=document.getElementById('likebtn'),
     txt="";
    


 function like(){
    togle = !togle
    if(togle){
    for(let i = 172; i<=173; i++){
       txt= i;
       likebtn.style.color='rgb(37, 186, 245)'
    }
}else{
    for(let i = 172; i<=173; i++){
    txt = i - 1;
    likebtn.style.color='rgb(180, 178, 178)'
    }
}   liketext.textContent=txt
}
 

likebtn.addEventListener('click',like);
 


/* function like(){
    let togle=false;
    togle=!togle;
    let txt='';

    let getJs=document.createElement('script');
    getJs.src='script.js';
    document.body.appendChild(getJs);

    if(togle){
        document.body.appendChild(getJs);
        txt=document.body.appendChild(getJs);
        likebtn.style.color='rgb(37, 186, 245)'
    }else{
        document.body.appendChild(getJs);
        txt=document.body.appendChild(getJs);
        likebtn.style.color='rgb(180, 178, 178)'
    }

}
likebtn=document.getElementById('likebtn');
likebtn.addEventListener('click',like); */