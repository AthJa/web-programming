import { useState } from 'react'
import './style.css'
import React, { Component } from 'react';
import { createContext,useReducer,useEffect,useRef,useContext } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

const Counter1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
};

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

const Content = () => {
  const [joke, setJoke] = useState("");

  const showRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div>
      <button onClick={showRandomJoke}>Show Random Joke</button>
      <p>{joke}</p>
    </div>
  );
};

const Footer = () => {
  return <footer>© 2025 Your Application</footer>;
};

const StyledButton1 = () => {
  const buttonStyle = {
    backgroundColor: 'blue',
    padding: '10px',
    fontSize: '16px',
    color: 'white'
  };

  return <button style={buttonStyle}>Click Me</button>;
};

const StyledButton2 = () => {
  return (
    <>
      <style>
        {`
          .styled-button {
            background-color: green;
            padding: 10px;
            font-size: 16px;
            color: white;
          }
        `}
      </style>
      <button className="styled-button">Click Me</button>
    </>
  );
};

const StyledButton3 = () => {
  return <button className="styled-button">Click Me</button>;
};


const JokeFetcher = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Refresh Joke</button>
    </div>
  );
};

const FocusForm = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedApp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};


function App() {
  return (
    <div>
      <Header title="Welcome to My React App" />
      <Content />
      <StyledButton1/>
      <StyledButton2/>
      <StyledButton3/>
      <LifecycleDemo/>
      <Counter1/>
      <Counter2/>
      <JokeFetcher/>
      <FocusForm/>
      {/* <ThemedApp/> */}
      
      <Footer />
    </div>
  );
}

export default App
