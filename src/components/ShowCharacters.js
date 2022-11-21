import React, { useEffect, useState } from "react"
import { Characters } from "./subComponents/Characters";
import { Pagination } from "./subComponents/Pagination";

let url = "https://rickandmortyapi.com/api/character/?page=1";

function ShowCharacters(action = String) {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})

    const GetAllCharacters = (url) => {
        fetch(url + action.action)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    }

    const onPrevious = () => {
        GetAllCharacters(info.prev);
        window.scrollTo(0, 0);
    }

    const onNext = () => {
        GetAllCharacters(info.next);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        console.log(url+action.action);
        GetAllCharacters(url);
    }, []);

    return (
        <div className="container">
            <Characters characters={characters} />
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        </div>
    );
}
export default ShowCharacters;