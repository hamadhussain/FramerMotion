'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageWrapper } from "../../wrapper";

const Order = () => {
  const [Button, setButton] = useState(false);

  return (
    <>
    <PageWrapper>
      <motion.div >
          <h1> Order Making</h1>
          {
            
            <><li><button onClick={()=>setButton(true)}>Zinger</button></li>
            <li><button onClick={()=>setButton(true)}>Beef</button></li>
            <li><button onClick={()=>setButton(true)}>Chiken</button></li></>
            
            }
      </motion.div>
      <motion.button >
        {Button&&(
        <>Click To Continue</> )}
      </motion.button>
      </PageWrapper>
    </>
  );
};

export default Order;
