import React from 'react'

const UserInput = () => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name="initial-investment" required />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" name="annual-investment" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="text" name="expected-return" required />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" required />
                </p>
            </div>
        </section>
    )
}

export default UserInput