import './Board.css'
import {rows, cols} from '../constants/constants'

const Board = () => {
    const board = 
        new Array(rows)
        .fill ()
        .map(_=> new Array(cols).fill(''))

    return <div className='board'>
        {board.map((row, i) =>
            row.map((col, j) => <div key={i+'-'+j}/>)
        )}
    </div>
}

export default Board