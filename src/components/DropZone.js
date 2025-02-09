import { useEffect, useState } from 'react';
import './DropZone.css';
import { size,rows,cols } from '../constants/constants';
import ActiveCoin from './ActiveCoin';

const DropZone = () => {
    const [turn,setTurn] = useState(2)
    const [winner,setWinner] = useState(0)
    const [dropped,setDropped] = useState([
        {x: 5, y: 4, player: 1},
        // {x: 4, y: 1, player: 2},
        // {x: 3, y: 2, player: 2},
        // {x: 1, y: 3, player: 1}
    ])

    const findWinner = () => {
        const p1 = dropped.filter(d => d.player === 1)
        p1.forEach(({x,y}) =>{
            if(p1.find(m => x === m.x + 1 && y === m.y) &&
                p1.find(m => x === m.x + 2 && y === m.y) &&
                p1.find(m => x === m.x + 3 && y === m.y)
            )
            setWinner(1)
        })
    }

    useEffect(() => {
        if(dropped.length === rows*cols)
            setWinner(-1)
        findWinner()
    }, [dropped.length])

    return <div className='drop-zone'>
        {dropped.map((m,i) =>
            <div key = {i}
                className={`p${m.player}`}
                style={{transform: `translate(${m.y*size}px,${m.x*size+150}px)`}}
            />
        )}

        <ActiveCoin
            turn = {turn}
            dropped = {dropped}
            setDropped = {setDropped}
            setTurn = {setTurn}
        />
    </div>
}

export default DropZone