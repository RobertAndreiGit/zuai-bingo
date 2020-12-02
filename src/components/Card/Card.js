import React from 'react'
import { Container, GridList, GridListTile } from '@material-ui/core'
import Tile from '../Tile/Tile'

export default function Card({prompts, order}) {
    return (
        <Container>
            <GridList cols={5} className="grid-list">
                {order.map((el,idx) => 
                   <GridListTile key={idx} cols={1} className={`grid-list-tile `} ><Tile el={prompts[el]}/></GridListTile>
                )}
            </GridList>
        </Container>
    )
}
