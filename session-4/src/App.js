import React, { useState, useEffect } from 'react';

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//         }
//     }

//     handleClick = () => {
//         // this.setState({
//         //     count: this.state.count + 1
//         // });

//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Increase</button>
//                 <h1>{this.state.count}</h1>
//             </div>
//         );
//     }
// }

// function App() {
//     const [count, setCount] = useState(0);


//     const handleClick = () => setCount((prevCount) => prevCount + 1);

//     const handleDecrease = () => setCount(prevCount => prevCount - 1);

//     const handleReset = () => setCount(() => 0);

//     return (
//         <div>
//             <button onClick={handleClick}>Increase</button>
//             <button onClick={handleDecrease}>Decrease</button>
//             <button onClick={handleReset}>Reset</button>


//             <h1>{count}</h1>
//         </div>
//     );
// }

// function App() {
//     const [city, setCity] = useState('');
//     const [country, setCountry] = useState('');

//     const handleCityChange = (event) => {
//         setCity(event.target.value);
//     }
//     const handleCountryChange = (event) => {
//         setCountry(event.target.value);
//     }
//     return (
//         <form>
//             <div>
//                 <input type="text" placeholder="City" value={city} onChange={handleCityChange}></input>
//             </div>
//             <div>
//                 <input type="text" placeholder="Country" value={country} onChange={handleCountryChange}></input>
//             </div>
//             <div>I live in {`${city}, ${country}`}</div>
//         </form>
//     )
// }

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('magenta');

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
    const handleColor = () => {
        const nextColor = color === 'magenta' ? 'coral' : 'magenta';
        setColor(nextColor);
    };


    // componentDidMount() {
    //     console.log('This is this.componentDidMount. I run after 1st component render.');
    //  }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('This is this.componentDidUpdate. I run after something was changed (after a secondary render).')
    //  }

    // componentWillUnmount() {
    //     console.log('This is this.componentWillUnmount. I remove everything!');
    //  }

    useEffect(() => {
        console.log(`I live inside useEffect Hook. The current state is ${count}.`);

        return () => {
            console.log(`I remove everything that I set about the previous state is ${count}.`);
        }
    }, [count])

    return (
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleColor}>Color</button>
            <h1 style={{color}}>{count}</h1>
        </div>
    );
}

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Toggle counter</button>
            {visible && <Counter></Counter>}
        </div>
    );
}

export default App;