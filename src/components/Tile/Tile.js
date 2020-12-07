import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import './style.css'
import { useCookies } from 'react-cookie';

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

export default function Tile({idx, text, isClicked}) {
    const [clicked, setClicked] = useState(isClicked);
    const [cookies, setCookie] = useCookies(["picks"]);

    const handleClick = () => {
        setClicked((prev) => !prev);
    }

    useEffect(() => {
        var picks = cookies.picks;
        if(clicked === false && picks.includes(idx) === true) {
            removeA(picks, idx);
            setCookie("picks", picks, { path: '/' });
        } else if(clicked === true && picks.includes(idx) === false){
            picks.push(idx);
            setCookie("picks", picks, { path: '/' });
        }
    }, [clicked, idx, setCookie, cookies.picks])

    return (
        <Container className={`tile ${clicked ? 'tile-clicked' : ''}`} onClick={handleClick}>
            <Typography>{text}</Typography>
        </Container>
    )
}
