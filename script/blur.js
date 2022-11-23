let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputSubject = document.querySelector("#subject");



function changeInput(obj) {
    let text = obj.placeholder;
    obj.addEventListener('focus', function() {
        obj.previousElementSibling.innerHTML = text;

        obj.placeholder = ' '
    });
    obj.addEventListener('blur', function(){
        if(obj.value === ''){
            obj.placeholder = text;
            obj.previousElementSibling.innerHTML = ''
        }
    })
}

changeInput(inputName);
changeInput(inputEmail);
changeInput(inputSubject);


let sub = document.querySelector('#sub');
sbmBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(inputName.value !== '' && inputName.value !=='' ){
        console.log(inputName.value,inputEmail.value,inputSubject.value)
    }else{
        throw new Error('error')
    }

})