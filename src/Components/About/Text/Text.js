import React  from "react"
import { motion } from "framer-motion"


export default function Text ({text}){

    const letters = Array.from(text);

    const container = {
        hidden : {opacity:0},
        visible: (i=1) =>({
            opacity:1,
            transition: {staggerChildren:0.12, delayChildren:0.04*i},
        }),
    };


    const child = {
        visible:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                damping:12,
                stiffness:100,
            },
        },
        hidden:{
            opacity:0,
            y:20,
            transition:{
                type:"spring",
                damping:12,
                stiffness:100,
            }
        }
    }
    
    return(
        
        <motion.div
            style={{overflow:"hidden", display:"flex", fontSize:"2rem", color:"white", marginTop: "10%", marginLeft: "10%"}}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span
                    variants={child}
                    
                    key={index}
                >

                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}


        </motion.div>
        
        
    )  
}