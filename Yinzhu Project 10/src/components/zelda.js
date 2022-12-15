import react, { useState, useEffect } from "react";
import backgroundIMG from "./Wallpaper.jpg";
import { useSearchParams } from "react-router-dom";

// stalhorse
// hightail lizard
const Zelda = () => {

    // const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [commonLocations, setCommonLocations] = useState("");
    const [drops, setDrops] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("searchTerm" || "");
    const [id, setId] = useState(Number(searchTerm) || 1);
    const [name, setName] = useState(searchTerm || "horse");

    const getZeldaElement = async () => {
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${name}`);
        const result = await response.json();
        // console.log(result);
        setName(result.data.name);
        setId(result.data.id);
        setCategory(result.data.category);
        setDescription(result.data.description);
        setImage(result.data.image);
        setCommonLocations(result.data.common_locations);
        setDrops(result.data.drops);

        setSearchParams({ searchTerm: name })
    };

    useEffect(() => {
        getZeldaElement();
        // console.log("Running useEffect");
    }, [id, name]);

    // useEffect(() => {
    //     getZeldaElement();
    //     console.log("Running useEffect");
    // }, [name]);

    function reset() {
        document.location.reload(true);
    }


    const submitInput = event => {
        if (event.target.value != "") {
            setName(event.target.value)
        }
        console.log('value is:', event.target.value);
    }

    return <>
        <img className="backgroundIMG" src={backgroundIMG} />
        <h1> Lengend of Zelda </h1>
        <h2> Breath of the Wind </h2>
        <h2> Elements Pictorial Book </h2>

        <div className="info">
            <h3 className="name"> Name: {name} </h3>
            <h3 className="id" max="389" min="1"> ID: {id} </h3>
            <h4 className="category"> Category: {category} </h4>
            <p className="description"> Description: {description} </p>
            <img className="image" src={image} alt="Image of the Element"></img>
            <h4 className="commonLocations"> Common Locations: {commonLocations} </h4>
            <h4 className="drops"> It will drop: {drops == null || drops.length == 0 ? "nothing" : drops} </h4>
        </div>

        <div className="inputBoxDiv">
            <input className="inputBox" type="text" onDoubleClick={submitInput} placeholder="Please input the name or the id, and double-click to submit." />
        </div>
        <div className="buttons">
            <button onClick={() => id > 1 ? setName(`${id - 1}`) : id = 1}> Previous </button>
            <button onClick={reset}> Reset </button>
            <button onClick={() => id < 389 ? setName(`${id + 1}`) : id = 389}> Next </button>
        </div>

    </>
}

export default Zelda;