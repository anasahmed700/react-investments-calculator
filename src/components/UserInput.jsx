const UserInput = ({onChangeProp, userInputProp}) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name="initial-investment" required
                        value={userInputProp.initialInvestment}
                        onChange={(event) => onChangeProp('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" name="annual-investment" required
                        value={userInputProp.annualInvestment}
                        onChange={(event) => onChangeProp('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="text" name="expected-return" required
                        value={userInputProp.expectedReturn}
                        onChange={(event) => onChangeProp('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" required
                        value={userInputProp.duration}
                        onChange={(event) => onChangeProp('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput