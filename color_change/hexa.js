


let div = null;

function hex(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


window.onload = () =>{
    main()


}

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('hexa');
    const btn = document.getElementById('btn');
    const copyBtn = document.getElementById('copy');

    btn.addEventListener('click', function(){
        let bgColor = hex();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
 

    copyBtn.addEventListener('click' , function(){
        navigator.clipboard.writeText(output.value);
        
        if(div !== null){
            div.remove();
            div = null;
        }
        Toast(`${output.value} copied`)
    })
}


function Toast(massge){
    div = document.createElement('div');
    div.innerHTML = massge;

    document.body.append(div);
    div.className = 'toastms tost-in'

    div.addEventListener('click', function(){
        div.classList.remove('tost-in');
        div.classList.add('tost-out')

        div.addEventListener('animationend', function(){
            div.remove();
            div = null;
        })
    })
    
}



let planet = "Earth";

function Num(){
    return planet;
}
console.log(Num());