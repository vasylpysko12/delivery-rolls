

window.addEventListener('click', function(event){

    let counter;
    //Преревіряємо чи клік строго по кнопках "Плюс" або "Мінус"
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ){
    const counterWrapper = event.target.closest('.counter-wrapper')
    counter = counterWrapper.querySelector('[data-counter]')
    }
    
    if(event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText
        
    }
 
    if(event.target.dataset.action === 'minus'){

        if(counter.innerText > 1){
            counter.innerText = --counter.innerText
        }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText )=== 1){
            event.target.closest('.cart-item').remove(); 

            //Відображення статуса корзини пуста / повна
            toggleCartStatus();
            delivercalcCartPrice()
        }


    }
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        delivercalcCartPrice()
    }
    

    
     
});