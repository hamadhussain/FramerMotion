"use client";

import { motion, AnimatePresence, spring } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <>
    <AnimatePresence >
      <motion.div
        initial={{ opacity: 0, y: 15, x:-230 }}
        animate={{ opacity: 1, y: 2 ,x:4}}
        // exit={{ opacity: 0, y: 15 ,x:-230 }}
        transition={{ delay: 1,type:'spring' ,duration:0.3 ,stiffness:250 }}
        // whileTap={{scaleY :1.9,margin:'23px'}}
        >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);