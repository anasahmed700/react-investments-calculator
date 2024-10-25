import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue // + sign will convert string to number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeProp={handleUserInput} userInputProp={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App
