


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
    const input = document.getElementById('hexa');
    const btn = document.getElementById('btn');
    const copyBtn = document.getElementById('copy');

    btn.addEventListener('click', function(){
        let bgColor = hex();
        root.style.backgroundColor = bgColor;
        input.value = bgColor;
    })
 

    copyBtn.addEventListener('click' , function(){
        navigator.clipboard.writeText(input.value);
    })
}


