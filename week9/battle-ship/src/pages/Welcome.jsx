import React from 'react'
import { Link } from 'react-router-dom'
import 'css/style.css'

export default function Welcome() {

    return (
        <div className="welcome-page-wrapper">

            <div className="box-with-info">
                <div className="difficulty-selecter-wrapper ">
                    <span className="difficulty">
                        <Link to="/playground" className="control" >
                            <button type="button" className="btn btn-primary btn-difficulty" >Normal Game</button>
                            <span class="tooltiptext">Start a normal game with a stupid stupid AI!</span>
                        </Link>

                    </span>
                    <span className="difficulty">
                        <Link to="/playground" className="control" id="free-play">
                            <button type="button" className="btn btn-primary btn-difficulty">Free Play</button>
                            <span class="tooltiptext">Get a free play with no one competing with you!</span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}