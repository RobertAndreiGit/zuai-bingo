import React, {useEffect} from 'react'

import config from '../../config.json';
import './style.css';
import Card from '../Card/Card';
import { useCookies, withCookies } from 'react-cookie';
import { Box, Button } from '@material-ui/core';

const Bingo = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["order"]);
    const promptCount = config.prompts.length;
    
    useEffect(() => {
        if(cookies.order == null) {
            removeCookie("picks");
            let order = [...Array(promptCount).keys()];
            order.sort(() => .5 - Math.random())

            var d = new Date();
            d.setDate(d.getDate() + (7 - d.getDay()) % 7 + 1);

            setCookie("order", order, { path: '/', expires: d });
            setCookie("picks", [], { path: '/', expires: d });
        }
    }, [cookies, setCookie, promptCount, removeCookie])

    const handleReset = () => {
        removeCookie("order");
        window.location.reload(); 
    }

    return (
        <Box className="bingo">
            <h1>{config.title}</h1>
            <h2>{config.subtitle}</h2>
            {cookies.order && <Card prompts={config.prompts} order={cookies.order.slice(0,25)}/>}
            <Button onClick={handleReset}>Reset</Button>
        </Box>
    )
}

const CookiesBingo = withCookies(Bingo);
export default CookiesBingo;