const Winner = ({winner,reset}) => {
    return <p>
        {winner === -1
        ? <span>No player won</span>
        : <span>player {winner} has won</span>
        }
        
        <button onClick={reset}>Play Again</button>
    </p>
}

export default Winner