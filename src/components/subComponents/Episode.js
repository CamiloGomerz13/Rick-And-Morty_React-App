import React, { useEffect, useState } from "react"
import "../../css/episode.css"

const url = "https://rickandmortyapi.com/api/episode/";
export const Episode = (episodes = []) => {
    var episodeNumbers = [];
    const [episode, setEpisode] = useState([]);

    const GetEpisodeCharacter = (url) => {

        episodes.episode.forEach(element => {
            episodeNumbers.push(element.replace('https://rickandmortyapi.com/api/episode/', ''));
        });

        fetch(url + episodeNumbers.toString())
            .then(response => response.json())
            .then(data => {
                setEpisode(data);
            })
            .catch(error => console.log(error))
        console.log(episode)
    }
    useEffect(() => {
        GetEpisodeCharacter(url);
    });
    return (
        <div>
            <div class="row">
                {episode.map((item, index) => (
                    <div key={index} style={{ maxWidth: "350px" }} class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="row g-0">
                            <div class="col">
                                <span class="episodeContainer">
                                    <p class="subAd">{item.name}</p>
                                    <p class="epiT">
                                        {item.episode}
                                    </p>
                                    <p class="subAd">{item.air_date}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
