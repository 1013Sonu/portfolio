const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



document.querySelectorAll(".pic").forEach(function(elem){
    var dim = elem.getBoundingClientRect()


    elem.addEventListener("mousemove",function(dets){
        var dim = elem.getBoundingClientRect()
     this.children[1].style.clipPath = `circle(20% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`})

     
    elem.addEventListener("mouseleave",function(dets){
        var dim = elem.getBoundingClientRect()
     this.children[1].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`})

})
