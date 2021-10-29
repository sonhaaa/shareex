function alertSweet() {
    swal("Thành công", "Đơn hàng của bạn đã hoàn thành", "success")
        .then(function(){
            window.location = "https://shobee-source.vercel.app/";
        });
}

window.addEventListener('load', (event) => {
    let hrefLocation = window.location.href;
    if (!hrefLocation.includes('cart')) {
        let itemQuantityDOM = document.getElementById("cart__quantity");
        itemQuantityDOM.style.display = 'none';
    }else {
        let subtractButtonList = $('.subtract');
        let plusButtonList = $('.plus');
        let itemPrice = $('.item__content--price')
        let itemList = $('.item');

        let totalPriceDOM = document.getElementById("total__price");
        let itemQuantityDOM = document.getElementById("cart__quantity");


        function getTotalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < itemPrice.length; i++) {
                let price = itemPrice[i].innerHTML.trim().replace('.', '').replace('VND', '');
                totalPrice += parseInt(price);
            }
            totalPriceDOM.innerHTML = totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }

        function getTotalItem() {
            itemQuantityDOM.innerHTML = itemList.length;
        }

        getTotalItem();
        getTotalPrice();

        for (let i = 0; i < subtractButtonList.length; i++) {
            let subButton = subtractButtonList[i];
            let price = itemPrice[i];
            let priceString = price.innerHTML.trim().replace('.', '').replace('VND', '');
            subButton.addEventListener('click', function () {
                let currentQuantity = subButton.nextSibling.textContent;
                if (currentQuantity == 1) {
                    subButton.parentElement.parentElement.parentElement.remove();
                    itemList.length -= 1;
                    getTotalItem();
                }
                let newQuantity = parseInt(currentQuantity.trim()) - 1;
                subButton.nextSibling.textContent = newQuantity;
                let newPrice = parseInt(priceString) * newQuantity;
                price.innerHTML = newPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                getTotalPrice();
            })
        }


        for (let i = 0; i < plusButtonList.length; i++) {
            let plusButton = plusButtonList[i];
            let price = itemPrice[i];
            let priceString = price.innerHTML.trim().replace('.', '').replace('VND', '');
            plusButton.addEventListener('click', function () {
                let currentQuantity = plusButton.previousSibling.textContent;
                let newQuantity = parseInt(currentQuantity.trim()) + 1;
                plusButton.previousSibling.textContent = newQuantity;
                let newPrice = parseInt(priceString) * newQuantity;
                price.innerHTML = newPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                getTotalPrice();
            })
        }
    }
});

// function sendTotalToBE() {
//     let totalPrice = document.getElementById('total__price');
//     let totalPriceSend = parseInt(totalPrice.innerHTML.trim().replace('.', '').replace('VND', ''));
//     let percent = 20;

//     fetch(`http://localhost:3000/cart/${totalPriceSend}}/${percent}`, {method: 'get'})
//         .then(res => res.json())
//         .then(data => {
//             if (data.status === "OK")
//                 console.log(data)
//         })
// }

// function totalSendToShareex(total, percent) {
//     let temp = total * percent / 100;
// }