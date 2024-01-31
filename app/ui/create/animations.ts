 export const slide = {
    closed:{
        x:100,
        transition:{
            when:'beforeChildren'
        }

    },
    open:{
        x:'0%',
        transition:{
            type:'tween',
            duration:0.3,
            staggerChildren:0.2,
            when:'afterChildren'
        }
    }
}

export const pop = { 
    hide:{
        opacity:0,
        y:-20,
        when:'afterChildren'
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:'tween',
            staggerChildren:0.2,
            when:'beforeChildren'
        }
    }
}

export const slideUp = {
    hide:{
        y:10,
        opacity:0,
        transition:{
            when: "afterChildren",
        }
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            type:'tween',
            when: "beforeChildren",
            staggerChildren:0.1,
        
        }
    }
}

export const DropTextAppear = {
    hide:{
        y:5,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            type:'tween',
            
        }
    }
}