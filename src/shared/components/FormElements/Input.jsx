import { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators.js';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            };
        }
        case 'SET':
            return {
                ...state,
                value: action.val,
            };
        default:
            return state;
    }
};

export default function Input(props) {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput, initialValue } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    useEffect(() => {
        dispatch({ type: 'SET', val: initialValue });
    }, [initialValue]);

    const handleChange = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const handleTouch = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={handleChange}
                onBlur={handleTouch}
                value={inputState.value}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={handleChange}
                onBlur={handleTouch}
                value={inputState.value}
            />
        );

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
}