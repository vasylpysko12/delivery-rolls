const cartWrapper = document.querySelector('.cart-wrapper')
const cartWrappers = document.querySelector('.cart-wrapper')

const getProductInfo = (card)=>{
    return {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
    };  
}
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card')
        
        const productInfo = getProductInfo(card)  

        //Перевіряжмо чи є товар в корзині чи ні
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        if(itemInCart) {
            const counterELement = itemInCart.querySelector('[data-counter]')
            counterELement.innerText = parseInt(counterELement.innerText) + parseInt(productInfo.counter)
        
        }else{

        
        // Збираємо дані в шаблон для товара в корзину
        const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
        
                    <!-- cart-item__details -->
                    <div class="cart-item__details">
        
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="${productInfo.counter}">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
        
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
        
                    </div>
                    <!-- // cart-item__details -->
        
                </div>
            </div>
        </div>`
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml)     
        }
        
        card.querySelector('[data-counter]').innerText = '1'

        
    };
    //Відображення статуса корзини пуста / повна
    toggleCartStatus();
    delivercalcCartPrice()
    
    //розрахунок ціни варіант 2
    // const totalPrice = Array.from(cartWrappers.children).reduce((sum,item) => {
    //     const price = +item.querySelector('.price__currency').innerText.replace(/\D/g, '')
    //     const counter = +item.querySelector('[data-counter]').innerText
    //     return sum+= price * counter
    // },0)
    // document.querySelector('.total-price').innerText = totalPrice
});