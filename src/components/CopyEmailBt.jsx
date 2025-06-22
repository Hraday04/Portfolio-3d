import React from 'react'
import { motion } from 'motion/react';

const copyEmailBt = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "hraday04@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); 
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
  return (
    <motion.button
   
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}  
      exit={{ opacity: 0, y: 20 }}
      onClick={copyToClipboard}
      className="relative flex items-center justify-center w-40 h-10 px-4 py-2 text-sm font-medium text-white bg-black border-1 rounded-lg hover:bg-black focus:outline-none focus:ring-white focus:ring-offset-2"
    >
      {copied && (
        <span className="absolute left-0 w-full h-full bg-black rounded-lg flex items-center justify-center text-white">
          <img
            src="assets/copy-done.svg"
            alt="check icon"
            className="w-5 m-1"
          />
          <motion.p>Copied!</motion.p>
        </span>
      )}
      <motion.p className="flex items-center justify-center gap-2">
        <img src="assets/copy.svg" alt="copy icon" className="w-5" />
        Copy Email
      </motion.p>
    </motion.button>
  );
}

export default copyEmailBt
