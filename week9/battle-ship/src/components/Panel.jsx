import React from 'react'
import { useDispatch } from "react-redux";

const Panel = props => {

    const dispatch = useDispatch()

    const close = () => {

    }

    return (
        <div className={props.className}>
            <div className="over-layer">
            </div>
            <div className="panel">
                <div className="head">
                    <span className="close" active={props.active} onClick={() => dispatch({
                        type: "click",
                        active: "false"
                    })}>x</span>
                </div>
            </div>
        </div>
    )
}
export default Panel
