var roughSvg = (function(rough) {
    return {
        initSvg: function() {
            const heart = document.getElementById('svgHeart')
            const rc = rough.svg(heart);
            let node = rc.path(`M150 109
           A 60 70 30 1 1 247 176
           A 350 350 0 0 1 150 260
           A 350 350 0 0 1 53 176
           A 60 70 -30 1 1 150 109`, {
                fill: 'red'
            });
            heart.appendChild(node);
        }
    }
})(rough)
roughSvg.initSvg()
