import React from "react";
import Square from "./Square"
import { useSelector } from 'react-redux';

export default function Board() {
    const clickCount = useSelector((state) => state.clickCount)
    const boardState = useSelector((state) => state.game)

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((
                <Square symbol={boardState[i][j]} x={i} y={j} />
            ))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
    }


    return (
        <React.Fragment>
            <div className="header  has-text-centered">
                <p className="title">
                    Count:
                </p>
                <p className="count">{clickCount}</p>
            </div>
            <div className="board">
                {boardComponent}
            </div>
        </React.Fragment>
    )
};