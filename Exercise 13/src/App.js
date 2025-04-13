import React, { useState, Component } from "react";
const HelloReact = () => {
  return <h1>Hello, React!</h1>;
};
const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};
const StyledMessage = () => {
  const style = { color: "blue", fontSize: "20px", fontWeight: "bold" };
  return <p style={style}>This is a styled message!</p>;
};
const SumOfSquares = ({ num1, num2 }) => {
  const sum = num1 * num1 + num2 * num2;
  return <p>The sum of squares is: {sum}</p>;
};
const Greeting = ({ isMorning }) => {
  return <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>;
};
const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <h1>Today is {days[today]}</h1>;
};
const PrimeChecker = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return <p>{number} is {isPrime(number) ? "a prime number" : "not a prime number"}</p>;
};
class TemperatureConverter extends Component {
  state = { temp: "", scale: "C" };
  handleChange = (e) => {
    this.setState({ temp: e.target.value });
  };
  convertTemperature = () => {
    const { temp, scale } = this.state;
    if (!temp) return "";
    return scale === "C"
      ? (temp * 9 / 5) + 32 + " °F"
      : ((temp - 32) * 5 / 9) + " °C";
  };
  toggleScale = () => {
    this.setState((prevState) => ({
      scale: prevState.scale === "C" ? "F" : "C",
    }));
  };
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.temp}
          onChange={this.handleChange}
          placeholder="Enter temperature"
        />
        <button onClick={this.toggleScale}>
          Convert to {this.state.scale === "C" ? "Fahrenheit" : "Celsius"}
        </button>
        <p>Converted Temperature: {this.convertTemperature()}</p>
      </div>
    );
  }
}
const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? "It is a palindrome" : "It is not a palindrome"}</p>
    </div>
  );
};
const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  const generateRandom = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div>
      <button onClick={generateRandom}>Generate Random Number</button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
};
const LeapYearChecker = ({ year }) => {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeapYear ? "a Leap Year" : "not a Leap Year"}</p>;
};
const UserGreeting = ({ firstName, lastName }) => {
  return <h1>Hello, {firstName} {lastName}!</h1>;
};
function App() {
  return (
    <div>
      <HelloReact />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeChecker number={7} />
      <TemperatureConverter />
      <ReverseString text="React" />
      <RandomNumber />
      <LeapYearChecker year={2024} />
      <UserGreeting firstName="Atharva" lastName="Jape" />
    </div>
  );
}
export default App;