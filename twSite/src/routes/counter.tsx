import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div id="counter">
            <h1 className="text-5xl">Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)} className="text-3xl bg-offwhite rounded-md p-3 pl-10 pr-10 mr-2 mt-3">+</button>
            <button onClick={() => setCount(count - 1)} className="text-3xl bg-offwhite rounded-md p-3 pl-10 pr-10">-</button>
        </div>
    );
}