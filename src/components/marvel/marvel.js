import React, { useEffect, useState } from "react";
import CardCharacter from "./cardCharacter/cardCharacter";
import FooterMarvel from "./footerMarvel/foooterMarvel";
import NavbarMarvel from "./navbarMarvel/narvbarMarvel";

const md5 = require("md5"); 

function Marvel () {
    let [characters, setCharacters] = useState([]);
    useEffect(() => {
        if(!navigator.onLine) {
            if(localStorage.getItem("characters") === null) {
                setCharacters("Cargando personajes...");
            } else {
                setCharacters(JSON.parse(localStorage.getItem("characters")))
            }
        } else {
            // CombiParam (ts + private key + public key)
            // eslint-disable-next-line no-useless-concat
            const combiParam = '1' + '844cf164d0f14efd368b527054fb471b8242b856' + '2abdbe5120a7840b87701106f25685cd';
            const hash = md5(combiParam);
            const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2abdbe5120a7840b87701106f25685cd&hash=${hash}`
            fetch(urlAPI).then((res) => res.json()).then((data) => {
                console.log("Respose", data.data.results);
                setCharacters(data.data.results);
                console.log(JSON.stringify(data.data.results))
                localStorage.setItem("characters", JSON.stringify(data.data.results));
            })
        }
    }, [])
    return (
        <div>
            <NavbarMarvel/>
            <div className="container mt-3">
                <div className="row">
                    {characters.map((c) => <CardCharacter character={c} key={c.id}/>)}
                </div>
            </div>
            <FooterMarvel/>
        </div>
    );
}

export default Marvel;