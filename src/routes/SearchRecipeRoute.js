import React, {useState, useEffect} from 'react'

// Custom components
import Recipes from '../components/Recipes'

// Framer Motion Library
import { motion } from 'framer-motion'
// Variants for framer motion
import { titleVariants, opacityVariants } from '../variants/variants'

// Material UI Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function SearchRecipeRoute() {

    const [recipes, setRecipes] = useState(null)
    const [query, setQuery] = useState('');

    // useEffect for fetching the data
    useEffect(() => {

        if (!recipes) {
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=52dbab2c&app_key=b70e72dff2f60851a6f8165cc4043b14`)
            .then(res => res.json())
            .then(data => {

                setRecipes(data)
            })
        }
        console.log(recipes) // This is for testing only.
    }, [recipes])

    const containerVariants = {
        exit: {
            x: '-100%',
            transition: {
                type: 'tween'
            }
        }
    }

    return (
        <motion.div className="flex flex-col gap-5 bg-gradient-to-b from-orange-200 to-blue-200 min-h-screen py-[5rem] px-[2rem] lg:px-[8rem]"
            variants={containerVariants}
            exit="exit"
        >

            <motion.h1 className="text-2xl font-medium font-[Poppins] text-orange-800 lg:text-4xl"
                variants={titleVariants}
                initial="initial"
                animate="animate"
            >
                Find Your Recipe
            </motion.h1>

            <motion.form 
                className="flex items-center gap-2" 
                onSubmit={(e) => e.preventDefault()}
                variants={opacityVariants}
                initial="initial"
                animate="animate">
                <section className="flex flex-col items-start gap-2">

                    <section className="flex gap-3 flex-wrap items-center">
                        <TextField 
                            type="text"
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                            id="standard-basic" 
                            label="Recipe" 
                            variant="outlined" />

                        <Button 
                            type="submit"
                            onClick={() => { 
                                setRecipes('')
                            }} 
                            variant="contained"
                            size="large"
                            >
                            Search
                        </Button>
                    </section>
                    
                    
                </section>
            </motion.form>
            
            {/* RENDER THE LIST OF RECIPES */}
            {
                recipes ? 
                    // List of Recipes from an API.
                    <Recipes recipes={recipes}/> : 
                query ? 
                    <div className="flex flex-col justify-center items-center h-[10rem]">
                        <Typography className="text-orange-800" variant="body1" component="h5">
                            Searching for {query} recipe...
                         </Typography>;
                        <CircularProgress />
                    </div> : 
                <h1></h1>
            }
            
        </motion.div> 
    )
}

export default SearchRecipeRoute
