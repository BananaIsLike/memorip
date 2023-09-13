var write = document.querySelector('#write')
var letter = document.querySelector('#letter')
var paymentItems = document.querySelectorAll('.payment-item')
var checked = document.querySelectorAll('.payment-check svg path')
var send = document.querySelector('.sendBtn')

write.onclick = function(){
    write.parentElement.style.height = "300px"
    letter.style.display = "block"
}

paymentItems.forEach(() =>{
    addEventListener('click', () =>{
        checked.forEach((e) =>{
            e.style.fill = "#8FCC53"
        })
    })
})



