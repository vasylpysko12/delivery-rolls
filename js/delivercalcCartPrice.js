function delivercalcCartPrice(){
    
    const cartItems = document.querySelectorAll('.cart-item')
    const totalPriceEl = document.querySelector('.total-price')
    const deviveryCost = document.querySelector('.delivery-cost')
    let totalPrice = 0;
    cartItems.forEach(function(item){
        const amountEl = item.querySelector('[data-counter]')
        const priseEl = item.querySelector('.price__currency')
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priseEl.innerText)
        
        totalPrice += currentPrice;
        
    });

    totalPriceEl.innerText = totalPrice;

    
}   