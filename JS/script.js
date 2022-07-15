//content selector
const bodyColor=document.querySelector('body');
const hero =document.querySelector('#hero');
const text =document.querySelector('h1');
const myInput =document.querySelector('#myInput');
const list = document.querySelector('#list');


//btn selector
const modeBtn = document.querySelector('#modeBtn');
const todoBtn = document.querySelector('#todoBtn');
const clearBtn = document.querySelector('#clearBtn');
//function

const modeOne=()=>{
    if(hero.className==='container bg-light'){
        localStorage.setItem('bodyColor',"bg-dark");
        localStorage.setItem('mode','container bg-dark');
        localStorage.setItem('text','pt-5 pb-3 ms-3 text-white');
        localStorage.setItem('modeBtn','btn btn-light');
        localStorage.setItem('todoBtn','btn btn-light border rounded-circle mx-3');
        localStorage.setItem('myInput','form-control rounded border bg-light text-dark');
        localStorage.setItem('clearBtn','btn btn-light my-5 ');
        localStorage.setItem('list','bg-light rounded d-flex flex-column  text-dark ');
       
        bodyColor.className=localStorage.getItem('bodyColor');
        hero.className=localStorage.getItem('mode');
        text.className=localStorage.getItem('text');
        modeBtn.className=localStorage.getItem('modeBtn');
        todoBtn.className=localStorage.getItem("todoBtn");
        myInput.className=localStorage.getItem("myInput");
        clearBtn.className = localStorage.getItem("clearBtn");
        list.className = localStorage.getItem('list');        

       
    }

    else{
        localStorage.setItem('bodyColor',"bg-light");
        localStorage.setItem('mode','container bg-light');
        localStorage.setItem('text','pt-5 pb-3 ms-3 text-dark');
        localStorage.setItem('modeBtn','btn btn-dark');
        localStorage.setItem('todoBtn','btn btn-light border rounded-circle mx-3');
        localStorage.setItem('myInput','form-control rounded border bg-dark text-white');
        localStorage.setItem('clearBtn','btn btn-dark my-5 ');
        localStorage.setItem('list','bg-dark rounded d-flex flex-column  text-white');
        localStorage.setItem('listText',"bg-danger")
        bodyColor.className=localStorage.getItem('bodyColor');   
        hero.className=localStorage.getItem('mode');
        text.className=localStorage.getItem('text');
        modeBtn.className=localStorage.getItem('modeBtn');
        todoBtn.className=localStorage.getItem("todoBtn");
        myInput.className=localStorage.getItem("myInput");
        clearBtn.className = localStorage.getItem("clearBtn");
        list.className = localStorage.getItem('list');
       
        
    }


}
//actions
modeBtn.onclick=modeOne;
bodyColor.className=localStorage.getItem('bodyColor');
hero.className=localStorage.getItem('mode');
text.className=localStorage.getItem('text');
modeBtn.className=localStorage.getItem('modeBtn');
todoBtn.className=localStorage.getItem('todoBtn');
myInput.className=localStorage.getItem('myInput');
clearBtn.className=localStorage.getItem('clearBtn');
list.className = localStorage.getItem('list');



// todo App start



const todoApp=()=>{

    if (myInput.value == '') {
        alert("It can't be empty..."); 
    }
    else{

        const li = document.createElement('li');
        li.classList.add('li-styling');
        list.appendChild(li);
        li.innerHTML = myInput.value;
        
        li.style.margin="10px ";
        myInput.value = '';
      
        li.addEventListener('click', () =>{
            li.style.textDecoration = 'line-through';
        });
        li.addEventListener('dblclick', () =>{
            list.removeChild(li);
        });
        clearBtn.addEventListener('click', () =>{
            li.remove();
        });      

    }

   

}
todoBtn.onclick= todoApp;


