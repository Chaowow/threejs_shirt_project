import { motion, AnimatePresence } from 'framer-motion';
// motion: Provides components for creating animated elements using the Framer Motion library
// AnimatePresence: Enables smooth transitions for components entering and exiting the DOM

import { useSnapshot } from 'valtio'; 
// useSnapshot hook allows us to access the latest state object from Valtio's reactive proxy
// and automatically re-render the component whenever the state changes


import state from '../store'; // Importing the state object from the store module
import { CustomButton } from '../components';
import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
// Importing animations from the motion configuration module
// These animations are used for animating various elements in the UI


const Home = () => {
    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img 
                            src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                LET'S <br className='x1:block hidden'/> DO THIS.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                            Design your one-of-a-kind shirt and unleash 
                            your own style like never before with our new 
                            3D customization tool. <strong>Embrace individuality
                            </strong>{" "} with a garment that truly 
                            reflects your personality.
                            </p>

                            <CustomButton 
                                type='filled'
                                title='Customize it'
                                handleClick={() => state.intro = false}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home;