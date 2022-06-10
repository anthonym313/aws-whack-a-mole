function popUpRandomMole(){
    const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head.--whacked)");
    if(moleHeads.length === 0){
        window.alert("CONGRATS!! You Won!")
        window.location.reload()
    }
    let randomIndex = Math.floor(Math.random()* moleHeads.length)
    const moleToRemove = moleHeads[randomIndex]
    moleToRemove.classList.remove("--hidden");
    const moleHeadsWhacked = document.querySelectorAll(".wgs__mole-head.--whacked");
    const score = document.querySelector('.score-number')
    
    score.innerHTML = moleHeadsWhacked.length

    console.log(moleHeads.length)
    
    setTimeout(() => {
        hideMole(moleToRemove);
    }, 1000);
    
    return;
    
}

function hideMole(mole) {
    mole.classList.add("--hidden");
    setTimeout(() => {
        return popUpRandomMole()
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const moleHeads= document.querySelectorAll('.wgs__mole-head');
    
    setTimeout(() => {
        popUpRandomMole()
             
    }, 0)
    
    
    moleHeads.forEach(mole => {
        mole.addEventListener('click', event =>{
            mole.classList.add('--hidden');
            mole.classList.add('--whacked');
        })
    })
    

});