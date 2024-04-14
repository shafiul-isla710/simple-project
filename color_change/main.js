window.onload =() =>{
    main()
}

function main(){
   
     const main = document.getElementById("root");
     const btn = document.getElementById('btn');
     let input = document.getElementById('input');


     
     btn.addEventListener('click', function() {
         let randomColor = rgb();

         main.style.backgroundColor = randomColor;
          
         input.value = randomColor;
        
     })

}

function rgb(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    
    return `rgb(${red},${green},${blue})`;
}




