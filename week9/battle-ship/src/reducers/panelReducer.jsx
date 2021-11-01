const defaultState = {
    className: "panel-wrapper panel-invisible",
    active: false
}

export default function panelReducer(
    state = defaultState, action
) {
    if (action.type === 'click') {
        if (action.active === "true") state = {
            className: "panel-wrapper panel-visible",
            active: true
        };
    }
    return state;
}