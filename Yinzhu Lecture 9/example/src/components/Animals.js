import React, {useState} from "react";
import animals from "./animals.json";

const Animals = () => {
    const [darkMode, setDarkMode] = useState("fish")
    console.log(darkMode)

    const darkModeHelper = () => {
        setDarkMode(darkMode === "" ? "darkModeActivate" : "")
    }
    // function darkModeHelper() {
    //     console.log("hello222")
    // }

    // const animalNamesHeights = animals.map(function(animal) {
    //     return animal.name + " " + animal.height;
    // });
    // const namesHeights = animals.map(animal => {
    //     name: animal.name;
    //     height: animal.height;
    // })
    // console.log(animalNamesHeights);
    // console.log(namesHeights)

    return <>
        <button onClick={darkModeHelper}>Dark Mode</button>
        {
            animals.map((animal, index) => (
                <div key={index} className={`individualAnimal ${darkMode}`}>
                    <h1>{animal.name}</h1>
                    <h2>Animal: {animal.type}</h2>
                    <h2>Height: {animal.height}</h2>
                </div>
            ))
        }
    </>
}

export default Animals; //export this file, so that whenever we need this file in another file, we can just import it there