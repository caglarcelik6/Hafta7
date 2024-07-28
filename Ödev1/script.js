const inputDOM = document.querySelector('#task')
const listDOM = document.querySelector('#list')



function newElement(){
    if(inputDOM.value === ''){
        alert('Lütfen bi şey yazınız');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputDOM.value;
        listDOM.appendChild(li);
        let span = document. createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
    }

    inputDOM.value = "";
    saveData()
        


}

listDOM.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem('data' , listDOM.innerHTML);
}

function showTask(){
    listDOM.innerHTML = localStorage.getItem('data');
}

showTask();



