import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RecipeContext } from '../context/RecipeContext'
import { backdropVariant, modalVariant } from '../variants/variants'

// Recipe Components
import Nutritions from '../recipe-info-components/Nutritions'
import Ingredients from '../recipe-info-components/Ingredients'
import DietLabels from '../recipe-info-components/DietLabels'
import CuisineType from '../recipe-info-components/CuisineType'
import MealType from '../recipe-info-components/MealType'
import DishType from '../recipe-info-components/DishType'

// Material UI Icon
import CloseIcon from '@mui/icons-material/Close'

function RecipeInfoModal() {

    const { recipeInfo, isModalOpen, setModalOpen, isMobileScreen } = useContext(RecipeContext)
    const [expanded, setExpanded] = useState(false)

    return (
        <AnimatePresence initial={false}>

                {/* MODAL BACKDROP */}
                
                {isModalOpen && recipeInfo &&  <motion.div 
                    onClick={() => {
                        setExpanded(false)
                        setModalOpen(false)
                    }}
                    className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 w-screen flex items-end justify-center pt-[5rem] lg:items-start lg:pb-[2rem]" 
                    variants={backdropVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    >
                    
                    {/* MODAL */}
                    <motion.div
                            className="w-full py-[1rem] px-[2rem] flex flex-col gap-3 bg-gradient-to-b from-orange-200 to-blue-200 max-h-[30rem] overflow-y-auto lg:max-h-[100%] scroll-smooth rounded-[1rem_1rem_0_0] lg:rounded-2xl lg:max-w-[32rem]"
                            onClick={(e) => e.stopPropagation()} 
                            variants={modalVariant}
                            initial={isMobileScreen ? "mobileInitial" : "initial"}
                            animate="animate"
                            exit={ isMobileScreen ? "mobileInitial" : "exit" }
                            >
                            
                            <section className="flex items-center">
                                <hr className="border-2 border-orange-500 max-w-[3rem] w-[3rem] mx-auto"/>
                                
                                <a  onClick={() => {
                                    setExpanded(false); // set the nutrition section closed.
                                    setModalOpen(false) // close the modal
                                }}
                                    className="fixed right-[25px] top-[15px] p-[.2rem] hover:bg-orange-300 transition-all rounded-full">
                                    <CloseIcon className="text-orange-800  cursor-pointer " sx={{fontSize: 30}}/>
                                </a>
                            </section>
                            

                            {/* Recipe Name */}
                            <section className="flex flex-col gap-2 pt-5">
                                <h2 className="text-orange-900 font-bold text-xl font-['Helvetica']">{recipeInfo.recipe.label}</h2>
                                <hr className="border-2 border-orange-500 max-w-[4rem]"/>
                            </section>

                            {/* DETAILS: List of INGREDIENTS and NUTRITIONS */}
                            <section className="flex flex-col gap-5">
                                
                                <Ingredients ingredients={recipeInfo.recipe.ingredients}/>
                                <DietLabels dietLabels={recipeInfo.recipe.dietLabels} />
                                <CuisineType cuisineType={recipeInfo.recipe.cuisineType} />
                                <MealType mealType={recipeInfo.recipe.mealType} />
                                <DishType dishType={recipeInfo.recipe.dishType} />
                                <Nutritions expanded={expanded} setExpanded={setExpanded} nutrients={recipeInfo.recipe.totalNutrients}/>
                            </section>

                            {/* <div className="modal-action">
                                <label onClick={() => {
                                    
                                    
                                }} htmlFor="" className="btn bg-orange-500 border-none hover:bg-orange-400 ">Close</label>
                            </div> */}
                        </motion.div> 
                </motion.div> }
            </AnimatePresence>
    )
}

export default RecipeInfoModal
