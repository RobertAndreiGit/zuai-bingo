import React, {useEffect} from 'react'

import config from '../../config.json';
import './style.css';
import Card from '../Card/Card';
import { useCookies, withCookies } from 'react-cookie';

const Bingo = () => {
    const [cookies, setCookie] = useCookies(["order"]);
    var d = new Date();
    d.setDate(d.getDate() + 1)
    d.setHours(6,0,0,0);
    
    useEffect(() => {
        if(cookies.order == null) {
            let order = [...Array(25).keys()];
            order.sort(() => .5 - Math.random())
            setCookie("order", order, { path: '/', expires: d });
        }
    }, [cookies, setCookie, d])

    return (
        <div className="bingo">
            <h1>{config.title}</h1>     
            {cookies.order && <Card prompts={config.prompts} order={cookies.order}/>} 
            {/*<PromptList prompts={config.prompts}/>*/}
        </div>
    )
}

const CookiesBingo = withCookies(Bingo);
export default CookiesBingo;