import { ACTIONS } from "./scientific-calculator";

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

export function ScienceButton({ dispatch, value, mode = 'number', spanTwo = false }) {
    const handleClick = () => {
        if (mode === 'operator') {
            dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: value } });
        } else {
            dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: value } });
        }
    };

    const className = mode === 'operator'
        ? `calcOperator${spanTwo ? ' span-two' : ''}`
        : mode === 'number'
            ? `calc_number${spanTwo ? ' span-two' : ''}`
            : `calc_number calcOperator${spanTwo ? ' span-two' : ''}`;

    return (
        <button className={className} onClick={handleClick}>
            {value}
        </button>
    );
}
