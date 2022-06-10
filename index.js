function popUpRandomMole(){
    const moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head.--whacked)");
    let randomIndex = Math.floor(Math.random()* moleHeads.length)
    const moleToRemove = moleHeads[randomIndex]
    moleToRemove.classList.remove("--hidden");
    setTimeout(() => {
        hideMole(moleToRemove)
    }, 3000);
}

function hideMole(mole) {
    mole.classList.add("--hidden");
    setTimeout(() => {
        return popUpRandomMole()
    })
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popUpRandomMole()
    }, 0)

    const moleHeads = document.querySelectorAll('.wgs__mole-head');
    const moleHeadswhacked = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head.--whacked)");


    if(moleHeadswhacked.length === 0 ){
        window.alert("CONGRATS!! You Won!")
    }
    moleHeads.forEach(mole => {
        mole.addEventListener('click', event =>{
            mole.classList.add('--hidden');
            mole.classList.add('--whacked');
        })
    })


});