let row = 1
let stitch = 0

document.addEventListener("keydown", event =>{
    let button = event.key

    switch (button) {
        case "ArrowUp":
            row++
            break;

        case "ArrowDown" :
            row--
            if (row < 1) {
                row = 1
            }
            break;

        case "ArrowRight":
            stitch++
            break;

        case "ArrowLeft":
            stitch--
            if (stitch< 0) {
                stitch = 0
            }
            break;

        case "m" :
            stitch = 0
            break;
            
        case "r" :
            row = 1
            break;
            
        default:
            break;

    }
    
    document.querySelector("#row").innerHTML = "Rang : " + row
    document.querySelector("#stitch").innerHTML = "Nombre de mailles : " + stitch
})