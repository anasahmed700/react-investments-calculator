import { useState } from 'react'

const UserInput = () => {
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
                [inputIdentifier]: newValue
            };
        });
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name="initial-investment" required
                        value={userInput.initialInvestment}
                        onChange={(event) => handleUserInput('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" name="annual-investment" required
                        value={userInput.annualInvestment}
                        onChange={(event) => handleUserInput('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="text" name="expected-return" required
                        value={userInput.expectedReturn}
                        onChange={(event) => handleUserInput('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" required
                        value={userInput.duration}
                        onChange={(event) => handleUserInput('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput