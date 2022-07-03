console.log('This is a calculator')
let screen = document.getElementById('screen')
let screenValue = '' ; 
let button = document.querySelectorAll('button') 
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText; 
        console.log('button text is',buttonText)
        if(buttonText=='C'){
            screenValue = ''
            screen.value = screenValue ; 
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue)
        }
        else{
            screenValue += buttonText ; 
            screen.value = screenValue
        }
    })
}
