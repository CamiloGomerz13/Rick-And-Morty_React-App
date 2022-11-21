import React from "react";
import "../../css/DetailPopUp.css"
import { Episode } from "./Episode";

export const DetailPopUp = ({ open, onClose, item }) => {
    if (!open) return null
    var i
    var episodesToSend = [];
    
    //Only want to show the first 8 episodes as figma mockup shows
    for(i=0; i<7 && i<item.episode.length ;i++){
        episodesToSend.push(item.episode[i])
    }

    return (
        <div>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal-content">
                <div class="headerImg">
                </div>
                <img class="roundedImg" src={item.image} alt="" />
                <div class="headerDown">
                    <h6 class="sub">{item.status}</h6>
                    <p class="name">{item.name}</p>
                    <h6 class="sub">{item.species}</h6>
                </div>
                <p class="infoTitle">Informacion</p>
                <div class="infoContainer">
                    <div class="chipContainer">
                        <label class="labelChip"  style={{ margin: "0px" }} >Gender:</label>
                        <span class="chip">
                            <h6 class="infoText">
                                {item.gender}
                            </h6>
                        </span>
                    </div>
                    <div class="chipContainer">
                        <label class="labelChip" style={{ margin: "0px" }} >Origin:</label>
                        <span class="chip">
                            <h6 class="infoText">
                                {item.origin.name}
                            </h6>
                        </span>
                    </div>
                    <div class="chipContainer">
                        <label class="labelChip"  style={{ margin: "0px" }} >Type:</label>
                        <span class="chip">
                            <h6 class="infoText">
                                {item.type}
                            </h6>
                        </span>
                    </div>
                </div>
                <hr/>
                <p class="Title">Episodios</p>
                <div>
                    <Episode episode={episodesToSend}/>
                </div>
            </div>
        </div>
    );
}
