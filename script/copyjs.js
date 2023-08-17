const plus1 = document.querySelector('#plus1')
const plus2 = document.querySelector('#plus2')
const plus3 = document.querySelector('#plus3')
const plus4 = document.querySelector('#plus4')
const minus1 = document.querySelector('#minus1')
const minus2 = document.querySelector('#minus2')
const minus3 = document.querySelector('#minus3')
const minus4 = document.querySelector('#minus4')
const itemvalue1 = document.querySelector('#p1')
const itemvalue2 = document.querySelector('#p2')
const itemvalue3 = document.querySelector('#p3')
const itemvalue4 = document.querySelector('#p4')
const incart1 = document.querySelector('#cart1')
const incart2 = document.querySelector('#cart2')
const incart3 = document.querySelector('#cart3')
const incart4 = document.querySelector('#cart4')
const cartbutton = document.querySelector('#cartbtn')
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let countall = 0 


// карточка 1
incart1.addEventListener('click', function(){
    count1++
    incart1.classList.add('hidden')
    cartbutton.classList.remove('hidden')
    plus1.classList.remove('hidden')
    itemvalue1.classList.remove('hidden')
    minus1.classList.remove('hidden')
    countall ++
    console.log(countall)
    document.querySelector('#p1').innerHTML = count1
    document.querySelector('.crtnum').innerHTML = countall
})




plus1.addEventListener('click', function() {
    count1++
    console.log(count1)
    countall++
    console.log(countall)
    document.querySelector('#p1').innerHTML = count1
    document.querySelector('.crtnum').innerHTML = countall
    if (count1 >= 0){
        cartbutton.classList.remove('hidden')
    }
    else{
        plus1.classList.add('hidden')
        itemvalue1.classList.add('hidden')
        minus1.classList.add('hidden')
        incart1.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    }
    
})

minus1.addEventListener('click', function() {
    count1--
    console.log(count1)
    countall--
    console.log(countall)
    document.querySelector('#p1').innerHTML = count1
    document.querySelector('.crtnum').innerHTML = countall
    if (count1 <= 0){
        plus1.classList.add('hidden')
        itemvalue1.classList.add('hidden')
        minus1.classList.add('hidden')
        incart1.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    }
    else{
        cartbutton.classList.remove('hidden')
    } 
    
})
// конец первой карточки


// карточка 2
incart2.addEventListener('click', function(){
    count2++
    incart2.classList.add('hidden')
    cartbutton.classList.remove('hidden')
    plus2.classList.remove('hidden')
    itemvalue2.classList.remove('hidden')
    minus2.classList.remove('hidden')
    countall++
    console.log(countall)
    document.querySelector('#p2').innerHTML = count2
    document.querySelector('.crtnum').innerHTML = countall
})




plus2.addEventListener('click', function() {
    count2++
    console.log(count2)
    countall++
    console.log(countall)
    document.querySelector('#p2').innerHTML = count2
    document.querySelector('.crtnum').innerHTML = countall
    if (count2 >= 0){
        cartbutton.classList.remove('hidden')
    }
    else{
        plus2.classList.add('hidden')
        itemvalue2.classList.add('hidden')
        minus2.classList.add('hidden')
        incart2.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    } 
    
})

minus2.addEventListener('click', function() {
    count2--
    console.log(count2)
    countall--
    console.log(countall)
    document.querySelector('#p2').innerHTML = count2
    document.querySelector('.crtnum').innerHTML = countall
    if (count2 <= 0){
        plus2.classList.add('hidden')
        itemvalue2.classList.add('hidden')
        minus2.classList.add('hidden')
        incart2.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    }
    else{
        cartbutton.classList.remove('hidden')
    } 
    
})
// конец 2 карточки


// карточка 3
incart3.addEventListener('click', function(){
    count3++
    incart3.classList.add('hidden')
    cartbutton.classList.remove('hidden')
    plus3.classList.remove('hidden')
    itemvalue3.classList.remove('hidden')
    minus3.classList.remove('hidden')
    countall++
    console.log(countall)
    document.querySelector('#p3').innerHTML = count3
    document.querySelector('.crtnum').innerHTML = countall
})




plus3.addEventListener('click', function() {
    count3++
    console.log(count3)
    countall++
    console.log(countall)
    document.querySelector('#p3').innerHTML = count3
    document.querySelector('.crtnum').innerHTML = countall
    if (count3 >= 0){
        cartbutton.classList.remove('hidden')
    }
    else{
        plus3.classList.add('hidden')
        itemvalue3.classList.add('hidden')
        minus3.classList.add('hidden')
        incart3.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    } 

})

minus3.addEventListener('click', function() {
    count3--
    console.log(count3)
    countall--
    console.log(countall)
    document.querySelector('#p3').innerHTML = count3
    document.querySelector('.crtnum').innerHTML = countall
    if (count3 <= 0){
        plus3.classList.add('hidden')
        itemvalue3.classList.add('hidden')
        minus3.classList.add('hidden')
        incart3.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    }
    else{
        cartbutton.classList.remove('hidden')
    } 
    
})
// конец 3 карточки



// карточка 4
incart4.addEventListener('click', function(){
    count4++
    incart4.classList.add('hidden')
    cartbutton.classList.remove('hidden')
    plus4.classList.remove('hidden')
    itemvalue4.classList.remove('hidden')
    minus4.classList.remove('hidden')
    countall++
    console.log(countall)
    document.querySelector('#p4').innerHTML = count4
    document.querySelector('.crtnum').innerHTML = countall
})




plus4.addEventListener('click', function() {
    count4++
    console.log(count4)
    countall++
    console.log(countall)
    document.querySelector('#p4').innerHTML = count4
    document.querySelector('.crtnum').innerHTML = countall
    if (count4 >= 0){
        cartbutton.classList.remove('hidden')
    }
    else{
        plus4.classList.add('hidden')
        itemvalue4.classList.add('hidden')
        minus4.classList.add('hidden')
        incart4.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    } 
    
})

minus4.addEventListener('click', function() {
    count4--
    console.log(count4)
    countall--
    console.log(countall)
    document.querySelector('#p4').innerHTML = count4
    document.querySelector('.crtnum').innerHTML = countall
    if (count4 <= 0){
        plus4.classList.add('hidden')
        itemvalue4.classList.add('hidden')
        minus4.classList.add('hidden')
        incart4.classList.remove('hidden')
        if (countall <=0){
            cartbutton.classList.add('hidden')
        }
    }
    else{
        cartbutton.classList.remove('hidden')
    } 
    
})
// конец 4 карточки
