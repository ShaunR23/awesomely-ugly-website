const picButton = document.querySelector('.swap-image')
const img = document.querySelector('.kc')
picButton.addEventListener('click', function(){
    
       if (img.src != 'https://i.ebayimg.com/images/g/Z2oAAOSwlPxhNRKI/s-l300.png'){
           img.src = 'https://i.ebayimg.com/images/g/Z2oAAOSwlPxhNRKI/s-l300.png'
           
           
        }else{
            img.src ='https://i.ebayimg.com/images/g/AbQAAOSw64tdjOAN/s-l300.jpg'
    
}})
    
