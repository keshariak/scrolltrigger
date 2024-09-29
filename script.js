gsap.to("#box",{
    left:"50%",
    yoyo:true,
    opacity:0,


    scrollTrigger:{
        scroller:"body",
        trigger:"#box",
        markers:true,
        start:"top 50%",
        end:"20%",
        scrub:3

    }
})