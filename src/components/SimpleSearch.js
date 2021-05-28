import { createRef } from 'react';
import '../css/SimpleSearch.css';

export default function SimpleSearch({ setter }) {
    let inputRef = createRef()

    return (
    <div>
        <input ref={inputRef} />
        <button onClick={() => setter(inputRef.current.value)}>Search</button>
    </div>
    );
}