var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:"true"
}})
tl.to("#fanta",{
    top:"106%",
    left:"2%"
},'orange')
tl.to("#orange",{
    top:"105%",
    left:"10%"
},'orange')
tl.to("#orang",{
    width:"20%",
    top:"160%",
    left:"20%"
},'orange')
tl.to("#leaf",{
    rotate:"45deg",
    width:"20%",
    top:"107%",
    left:"70%"
},'orange')

gsap.from("#lemon",{
    rotate:'-90deg',
    opacity:0,
    left:"-100%",
    top:"20%",
    scrollTrigger:{
        trigger: ".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
}},'jon')
gsap.from("#pepsi",{
    rotate:'-90deg',
    left:"-100%",
    opacity:0,
    top:"20%",
    scrollTrigger:{
        trigger: ".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
}
},'jon')
gsap.from("#apple",{
    rotate:'90deg',
    left:"100%",
    opacity:0,
    top:"20%",
    scrollTrigger:{
        trigger: ".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
}
},'jon')
gsap.from("#cola",{
    rotate:'90deg',
    left:"100%",
    opacity:0,
    top:"20%",
    scrollTrigger:{
        trigger: ".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
}
},'jon')
gsap.from("#orange2",{
    rotate:'90deg',
    opacity:0,
    top:"20%",
    scrollTrigger:{
        trigger: ".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
}
},'jon')
gsap.from("#fanta2",{
    opacity:0,
    top:"50%",
    scrollTrigger:{
        trigger: ".three",
        start:"0% 95%",
        end:"50% 50%",
        scrub:"true",
}
},'jon')

gsap.from("#ano",{
    opacity:0,
    x:"-50%",
    scrollTrigger:{
        trigger:".four",
        start:"30% 80%",
        end:"30% 40%",
        scrub:"true",
       
    }
})
gsap.from("#noa",{
    opacity:0,
    x:"50%",
    scrollTrigger:{
        trigger:".four",
        start:"30% 80%",
        end:"30% 40%",
        scrub:"true",
    }
})
var tm=gsap.timeline();
tm.from("#fe",{
    opacity:0,
    y:"-50%",
    duration:0.5
})
tm.from(".cntr-nav a",{
    opacity:0,
    y:"-70%",
    duration:0.8,
    stagger:0.15
})
tm.from("#io",{
    opacity:0,
    y:"-50%",
    duration:0.5
})
