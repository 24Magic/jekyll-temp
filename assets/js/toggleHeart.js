const toggleHeart = document.querySelector('.toggleHeart')
const svgHeart = document.querySelector('#svgHeart')
const canvasHeart = document.querySelector('#canvasHeart')
//切换svg和canvas
let s
toggleHeart.addEventListener('click', function(event) {
    const target = event.target
    if (target.tagName === 'path' || target.tagName === 'svg') {
        s = setTimeout(()=>{
            clear()
            start()
        }, 1000/60)
        svgHeart.style.display = 'none'
        canvasHeart.style.display = 'block'
    } else {
        svgHeart.style.display = 'block'
        canvasHeart.style.display = 'none'
        points = []
        clearTimeout(s)
    }
}, false)
