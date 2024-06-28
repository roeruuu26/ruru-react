import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPhp } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaRaspberryPi } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { motion } from "framer-motion";



const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10 , -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    return <div className=" border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Programming Languages</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(0.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPhp className="text-7xl text-purple-300" />
            </motion.div>
            <motion.div 
            variants={iconVariants(0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(0.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaRaspberryPi className="text-7xl text-red-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiVisualstudio className="text-7xl text-purple-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(0.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(0.7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiArduino className="text-7xl text-cyan-400" />
            </motion.div>
            
         </div>
        </div>;
};

export default Technologies;