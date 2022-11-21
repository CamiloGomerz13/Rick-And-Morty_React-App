import React, { useState } from "react";
import "../../css/Character.css"
import { DetailPopUp } from "./DetailPopUp";
export const Characters = ({ characters = [] }) => {

    const [openModal, setOpenModal] = useState(false);
    const [character, setCharacter] = useState({});

    
    const handleClick = (item) =>{
        setOpenModal(true);
        setCharacter(item);
        window.scrollTo(0, 0);
    }
    
    return (
        <div className="container">
            <div class="row">
                {characters.map((item, index) => (
                    <div key={index} class="card mb-3" style={{ maxWidth: "350px" }} onClick={()=> handleClick(item)}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={item.image} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                {/* className={item.status === 'alive' ? styles.class1 : styles.class2 } */}
                                    <p class="card-text">{item.status} - {item.species}</p>
                                    <h6 class="card-title">{item.name}</h6>
                                    <p class="card-text"><small class="text-muted">Last known location:</small></p>
                                    <h7 class="card-title">{item.location.name}</h7>
                                    <p class="card-text"><small class="text-muted">First seen in:</small></p>
                                    <h7 class="card-title">{item.origin.name}</h7>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <DetailPopUp open={openModal} onClose={()=>setOpenModal(false)} item={character}/>
        </div>
    )
}
