'use client'
// components/Form.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../globals.css'
import Link from 'next/link';

// import { PageWrapper } from "../../wrapper";
const Page = () => {
    const [Button, setButton] = useState(false);
   const heartVariants = {
      
      hover: {
        
        scale: 1.1,
        transition: {
          duration: 3,
          // how many times we want to repeat the animation
          yoyo: Infinity
        },
      },
    }; 

  
      return (
        <>
        {/* <PageWrapper> */}
          
          {<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ rotate: 360 ,opacity:1}}
          transition={{ ease: "linear", duration: 1, repeat: 1 }}
          className=" text-center div  dd ltdiva text-red-50 bg-teal-500 rounded-full  container   m-auto  bg-gradient-to-r from-indigo-300 via-purple-600 to-cyan-700  w-auto font-bold p-20 ">
              <motion.h1 initial={{opacity:0}}
              animate={{opacity:1,scale:1.9}}
              whileHover={{scale:2.6}}
              className=' h1order' > Order Making</motion.h1>
  
              <br /><hr  className=' w-auto m-12'/>
              
                
                <>
                <ul className=' p-6  m-5'>
                <br /><motion.li initial={{opacity:0}}
              animate={{opacity:1,scale:1.9}}
              whileHover={{scale:3}} className=' p-3 arrow    rounded-3xl w-auto'><button onClick={()=>setButton(true)}>Zinger</button></motion.li>
                <br /><motion.li 
                initial={{opacity:0}}
                animate={{opacity:1,scale:1.9}}
                whileHover={{scale:3}} className=' p-3 arrow  rounded-3xl w-auto'><button onClick={()=>setButton(true)}>Beef</button></motion.li>
                <br /><motion.li 
                initial={{opacity:0}}
                animate={{opacity:1,scale:1.9}}
                whileHover={{scale:3}} className=' p-3 arrow  rounded-3xl w-auto'><button onClick={()=>setButton(true)}>Chiken</button></motion.li>
                </ul>
                </>
                
                
                {Button&&(<Link href='/Components/Thanks'>
          <motion.button  initial={{opacity:0}}
          animate={{opacity:1,scale:1.1}} 
          transition={{ ease: "linear", yoyo:3, duration: 3, repeat: Infinity }}
          variants={heartVariants}
          whileHover="hover"
  
          className=" h1order   text-red-50 bg-teal-500 rounded-full  container   bg-gradient-to-r from-indigo-300 via-purple-600 to-cyan-700 ...   font-bold   m-auto   p-10 w-auto   ">
            
              
          Click To Continue
          </motion.button></Link>)}
          </motion.div>
         } 
          {/* </PageWrapper> */}
        </>
      );
    
    
  };

export default Page
