export const fadeUp = {
    closed:{
      y:15,
      opacity:0,
    },
    opened:(index)=>({
      y:0,
        opacity:1,
        transition:{
            delay:index*0.3,
            duration:0.6,
        }
    })
  
  }