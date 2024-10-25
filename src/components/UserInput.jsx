const UserInput = ({onChangeProp, userInputProp}) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                        value={userInputProp.initialInvestment}
                        onChange={(event) => onChangeProp('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                        value={userInputProp.annualInvestment}
                        onChange={(event) => onChangeProp('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                        value={userInputProp.expectedReturn}
                        onChange={(event) => onChangeProp('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"  required
                        value={userInputProp.duration}
                        onChange={(event) => onChangeProp('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput