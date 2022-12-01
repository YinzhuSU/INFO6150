import react, { useState, useEffect } from "react";
import backgroundIMG from "./Wallpaper.jpg";

const Zelda = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState(9);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [commonLocations, setCommonLocations] = useState("");
    const [drops, setDrops] = useState("");

    const getZeldaElement = async () => {
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${id}`);
        const result = await response.json();
        setName(result.data.name);
        setId(result.data.id);
        setCategory(result.data.category);
        setDescription(result.data.description);
        setImage(result.data.image);
        setCommonLocations(result.data.common_locations);
        setDrops(result.data.drops);
    };

    useEffect(() => {
        getZeldaElement();
        console.log("Running useEffect");
    }, [id]);

    function reset() {
        document.location.reload(true);
    }

    return <>
        <img className="backgroundIMG" src={backgroundIMG} />
        <h1> Lengend of Zelda </h1>
        <h2> Breath of the Wind </h2>
        <h2> Elements Pictorial Book </h2>
        <h3 className="name"> Name: {name} </h3>
        <h3 className="id"> ID: {id} </h3>
        <h4 className="category"> Category: {category} </h4>
        <p className="description"> Description: {description} </p>
        <img className="image" src={image} alt="Image of the Element"></img>
        <h4 className="commonLocations"> Common Locations: {commonLocations} </h4>
        <h4 className="drops"> It will drop: {drops} </h4>


        <div className="buttons">
            <button onClick={() => setId(id - 1)}> Previous </button>
            <button onClick={reset}> Reset </button>
            <button onClick={() => setId(id + 1)}> Next </button>
        </div>

    </>
}

export default Zelda;