var tl = gsap.timeline()
tl.from('.page1 nav .logo,.page1 nav .middle h2,.page1 nav .right h2,.page1 nav .right button ',{
    y:-70,
    duration:1,
    opacity:0,
    stagger:.3

})
tl.from('.page1 .content h1',{
    x:-700,
    duration:2,
    opacity:0

})
tl.from('.page1 .content .buttonandnote p',{
    x:-350,
    duration:1,
    opacity:0

})
tl.from('.page1 .content .buttonandnote button',{
    x:-200,
    duration:1,
    opacity:0

})
tl.from('.page1 .scrolldown h2',{
    scale:0,
    opacity:0
    
})
tl.to('.page1 .scrolldown h2',{
  y:20,
  repeat:-1,
  duration:.5,
  yoyo:true
})