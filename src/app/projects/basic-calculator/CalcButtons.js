import { ACTIONS } from "./basic-calculator";

export function DigitButton({ dispatch, digit }) {
    return (
        <button className="calc_number" onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
            {digit}
        </button>
    )
}

export function OperatorButton({ dispatch, operation }) {
    return (
        <button className="calcOperator" onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
            {operation}
        </button>
    )
}