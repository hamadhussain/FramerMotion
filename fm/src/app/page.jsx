'use client'

import React from 'react';
import './globals.css';
import { PageWrapper } from '../app/wrapper';
import Link from 'next/link';
import { delay, motion, spring } from 'framer-motion';

export default function Home() {
  const heartVariants = {
    hover: {
      scale: [1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
      animate: { delay: 10 },
      transition: {
        duration: 10,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{
            scale: 1,
            transition: { delay: 0.25, duration: 2 },
          }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            ease: 'linear',
            yoyo: 3,
            duration: 1,
            repeat: 3,
          }}
          exit={{ scale: 0 }}
          className="ltdiv text-center div bg-teal-500 rounded-xl container m-auto my-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-all font-bold p-3.5 px-64 py-36"
        >
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1.1 }} className="text-center h1order">
            Pizza Man
          </motion.h1>
          <br />
          <hr className="px-20" />
          <motion.div className="h1order">
            Create Your Fast Food <br />
            <Link href="/Components/About" className="Link">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.1, rotate: 360 }}
                transition={{ ease: 'linear', yoyo: 3, duration: 1, repeat: 3 }}
                variants={heartVariants}
                whileHover="hover"
                className="h1order button transition-colors bg-slate-200 hover:bg-green-400 border-4 border-zinc-400 delay-200 m-8 rounded-2xl opacity-0.5"
              >
                Let&apos;s Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </>
  );
}



