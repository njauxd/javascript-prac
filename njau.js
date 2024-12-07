let chips
function orderChips() {
    console.log('order chips')
    setTimeout(()=>{
        chips = `cps`
        console.log(`${chips} are ready`)
    }, 2000)
    console.log(`chips were odered`)
} 
orderChips()
console.log(`Call Ayzoh`)
console.log(`Eat ${chips}`)




function oderChips(callback) {
    setTimeout(() =>{
        const chips = `cps`
        callback(chips)
    },2000)
}
function chipsReady(chips) {
    console.log(`Eat the ${chips}`)
}

orderChips(chipsReady)
console.log(`Call Ayzoh`)


window.addEventListener(`click`,callback)
function callback() {
    consoe.log(`clicked`)
}

