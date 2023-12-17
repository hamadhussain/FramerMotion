'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Page = () => {
  const [Let, setLet] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLet(true);
    }, 1000);
  }, []); 
  
  return (
    <>
      {/* <div class=" bg-gray-400  dark:bg-slate-800 rounded-lg  ring-1 ring-slate-900/5 shadow-xl my-16 mx-8  container p-15"> */}
      <div className=' text- text-center ll  m-72  text-stone-700 '>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.9 }}
          transition={{ ease: "linear", duration: 0.4 }}
        >
          Thanks For Ordering
        </motion.h1>
        <br /><br />
        {Let &&
          (
            <Link href='../'>
              <motion.button
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.3 }}
                transition={{ ease: "linear", duration: 2.5, repeat: Infinity }}
                className=' border-8  rounded-full border-x-gray-400 hover:border-x-lime-600 border-y-zinc-900 cursor-pointer my-6 p-2'
              >
                Let&apos;s Start Again
              </motion.button>
            </Link>
          )}
      </div>
    </>
  )
}

export default Page








// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import { useState,useEffect } from 'react'
// import { motion } from 'framer-motion'
// const Page = () => {
  
//   const [Let, setLet] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setLet(true);
//     }, 1000);
//   },[]); 
  
  
//   return (
//     <>
// {/* <div class=" bg-gray-400  dark:bg-slate-800 rounded-lg  ring-1 ring-slate-900/5 shadow-xl my-16 mx-8  container p-15"> */}
//     <div className=' text- text-center ll  m-72  text-stone-700 '>
//     <motion.h1 initial={{opacity:0}}
//             animate={{opacity:1 ,scale:1.9}}
//             transition={{ ease: "linear", duration: 0.4 }}
//     > Thanks For Ordering</motion.h1> 
//       <br /><br />
//       {
//       Let &&
//       (<Link href='../'><motion.button
//         initial={{opacity:0,scale:1.1}}
//         animate={{opacity:1 ,scale:1.3}}
//         transition={{ ease: "linear", duration: 2.5, repeat: Infinity }}
//   className=' border-8  rounded-full border-x-gray-400 hover:border-x-lime-600 border-y-zinc-900 cursor-pointer my-6 p-2'      >Let's Start Again</motion.button>
//       </Link>)}
//     </div>
    
//     {/* </div> */}
//     </>
//   )
// }

// export default Page
