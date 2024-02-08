
export const slideFromTop = {
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:0.3,
            delay: 0.1,
            type:'tween',
            staggerChildren:0.1,
            when:"beforeChildren"
        }
    },
     hide:{
        y:-70,
        opacity:0,
        transition:{
            when:"afterChildren"
        }
     }
}

export const slideFromD= {
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:0.3,
            delay: 0.1,
            type:'tween',
            staggerChildren:0.1,
            when:"beforeChildren"
        }
    },
     hide:{
        y:-30,
        opacity:0,
        transition:{
            when:"afterChildren"
        }
     }
}