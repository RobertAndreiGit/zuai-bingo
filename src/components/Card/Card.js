import React, { useEffect } from 'react'
import { Container, GridList, GridListTile } from '@material-ui/core'
import Tile from '../Tile/Tile'
import { useCookies } from 'react-cookie';

export default function Card({prompts, order}) {
    const [cookies, setCookie] = useCookies(["picks"]);

    useEffect(() => {
        if(cookies.picks == null) {
            var d = new Date();
            d.setDate(d.getDate() + (7 - d.getDay()) % 7 + 1);
            var arr = [];

            setCookie("picks", arr, { path: '/', expires: d });
        }
    }, [cookies, setCookie])

    return (
        <Container >
            {cookies.picks &&
                <GridList cols={5} className="grid-list">
                    { order.map((el,idx) => 
                    <GridListTile key={idx} cols={1} className={`grid-list-tile `}><Tile text={prompts[el]} isClicked={cookies.picks.includes(el)} idx={el}/></GridListTile>
                    )}
                </GridList>
            }
        </Container>
    )
}
