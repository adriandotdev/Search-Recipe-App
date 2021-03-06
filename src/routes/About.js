import React, {useEffect, useContext} from 'react'

// Variants for Framer Motion
import {titleVariants, paragraphVariants, socialsVariants} from '../variants/variants'

// Framer Motion
import {motion} from 'framer-motion'

// Icons from Material UI
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

// Context
import { RecipeContext } from '../context/RecipeContext'

function About() {

    const { setModalOpen } = useContext(RecipeContext)

    useEffect(() => {

        document.title = 'Food API | About'
        window.scrollTo(0, 0);
        setModalOpen(false);
    }, [])
    
    const containerVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                type: 'tween',
                staggerChildren: 12,
                when: 'beforeChildren'
            }
        },
        exit: {
            x: '100%',
            transition: {
                type: 'tween',
                // staggerChildren: 2
            }
        }
    }

    return (
        <motion.div 
            className="flex flex-col gap-5 bg-gradient-to-b from-orange-200 to-blue-200 min-h-screen py-[8rem] px-[2rem] lg:px-[8rem]"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            >
            
            {/* About Title */}
            <motion.h1 
                className="text-2xl font-medium font-[Poppins] text-orange-800 lg:text-4xl"
                variants={titleVariants}
                initial="initial"
                animate="animate"
                >
                About This App
            </motion.h1>

            <motion.p 
                className="text-xl text-orange-600 lg:max-w-[120ch]"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                >

                This is a simple app that enables the user to find a specific recipe. It can be a Filipino recipes, Italian recipes, etc. This app also gives the user an information about ingredients, diet labels, cuisine type, meal type, dish type and nutritions for a specific recipe. It uses <a className="font-semibold text-orange-800 italic" href="https://developer.edamam.com/edamam-docs-recipe-api" target="_blank">Edamam Recipe Search API</a>. One of the examples of it is when you type the word <em>'Chicken'</em>:
            </motion.p>

            <motion.p 
                className="text-xl text-orange-600"
                variants={paragraphVariants}
                >
                    You can get recipes such as:
            </motion.p>

            <motion.ul 
                className="pl-5 text-orange-800 list-disc"
                variants={paragraphVariants}
                >
                <li>Chicken Stew</li>
                <li>Chicken Paprikash</li>
                <li>Catalan Chicken</li>
                <li>Persian Chicken</li>
                <li>Etc...</li>
            </motion.ul>

            <motion.p 
                className="text-xl text-orange-600 lg:max-w-[120ch]"
                variants={paragraphVariants}
                >
                    This app is a personal project to implement the technologies that I currently know such as React.js, TailwindCSS, DaisyUI components library, Framer Motion which is an animation library, and Material UI.
            </motion.p>
            
            <motion.footer
                variants={paragraphVariants}
                >

                <section className="text-orange-800 font-bold mt-8">
                    <span>Let's Connect!</span>
                    <ul className="flex gap-2">
                        <motion.li
                            variants={socialsVariants}
                            whileHover="whileHover"
                            >
                            <a 
                                href="https://twitter.com/NadsMarcelo"
                                target="_blank"
                                >
                                <TwitterIcon className="text-orange-800" />
                            </a>
                        </motion.li>
                        <motion.li
                            variants={socialsVariants}
                            whileHover="whileHover"
                            >
                            <motion.a 
                                    href="https://www.linkedin.com/in/adrian-marcelo-aaa19b228/"
                                    target="_blank">
                                <LinkedInIcon className="text-orange-800" />
                            </motion.a>
                        </motion.li>
                        <motion.li
                            variants={socialsVariants}
                            whileHover="whileHover"
                            >
                            <motion.a 
                                    href="https://github.com/NADS-PROGRAMMER/Search-Recipe-App" 
                                    target="_blank">
                                <GitHubIcon className="text-orange-800" />
                            </motion.a>
                        </motion.li>
                    </ul>
                </section>
                
                <section className="flex flex-col items-start mt-10">
                    <span 
                        className="relative before:content-[' '] before:block before:absolute before:top-0 before:left-0 before:h-[.09rem] before:bg-orange-800 before:max-w-[20rem] before:w-full text-orange-800 font-bold text-center">
                            Copyright &copy; {new Date(Date.now()).getFullYear()}
                    </span>
                    <span className="text-orange-800 font-semibold">
                        Created by Nads Marcelo
                    </span>
                </section>
            </motion.footer>
        </motion.div>
    )
}

export default About
