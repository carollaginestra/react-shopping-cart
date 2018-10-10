import React from 'react';
import Header from '../../Header';
import { Link } from 'react-router-dom';

const InsertCard = ({
    name,
    number,
    month,
    day,
    ccv,
    onNameChange,
    onNumberChange,
    onMonthChange,
    onDayChange,
    onCcvChange
}) => (
    <div className="container">
        <Header href="/" title="Add a credit card" />

        <div className="flex flex-wrap">
            <div className="credit">
                <div>
                    <span className="card-items">Card Holder</span>
                    <p className="credit-name">{name}</p>
                </div>

                <div>
                    <p className="credit_card-number center">{number}</p>
                </div>

                <div className="flex justify-between">
                    <div>
                        <span className="card-items">Expire</span>
                        <p className="credit-date">
                            {month} / {day}
                        </p>
                    </div>

                    <div>
                        <span className="card-items">CCV</span>
                        <p className="credit-date">{ccv}</p>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="name"> NAME </label>
                <input
                    type="text"
                    name="name"
                    onChange={onNameChange}
                />

                <label htmlFor="number"> NUMBER </label>
                <input
                    type="text"
                    maxLength="16"
                    name="number"
                    onChange={onNumberChange}
                />

                <label>EXPIRATION DATE</label>
                <div>
                    <input
                        type="text"
                        maxLength="2"
                        name="day"
                        onChange={onMonthChange}
                        placeholder="DAY"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        maxLength="2"
                        name="month"
                        onChange={onDayChange}
                        placeholder="MONTH"
                    />
                </div>

                <label htmlFor="ccv"> CCV </label>
                <input
                    type="text"
                    name="ccv"
                    maxLength="3"
                    onChange={onCcvChange}
                />
            </div>
        </div>

        <Link to="/" className="btn btn-primary btn-lg center">
            Proceed to checkout
        </Link>
    </div>
);

export default InsertCard;
