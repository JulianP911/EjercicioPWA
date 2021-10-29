import React, { useState } from "react";

function CardCharacter (props) {
    let [character] = useState(props.character)
    return(
        <div className="col-3">
            <div class="card mb-3" style={{width: "15rem", height: "20rem"}}>
                <img src={character.thumbnail.path + "." + character.thumbnail.extension} class="card-img-top" alt={character.name} style={{height:"13rem"}}/>
                <div class="card-body">
                    <h5 class="card-title">{character.name}</h5>
                    <p class="card-text">Código: {character.id}</p>
                </div>
            </div>
        </div>
    );
}

export default CardCharacter;