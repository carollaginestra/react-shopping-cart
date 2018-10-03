import React from 'react';
import InsertCard from './InsertCard';

class InsertCardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'xxxxx xxx',
            number: '0000000000000000',
            month: 'xx',
            day: 'xx',
            ccv: 'XXX',
        };
    }

    //Name of Card
    nameChange = name => {
        this.setState({
            name: name.target.value,
        });
    };
    //Card Number
    numberChange = number => {
        this.setState({
            number: number.target.value,
        });
    };
    //Expiration
    monthChange = month => {
        this.setState({
            month: month.target.value,
        });
    };
    dayChange = day => {
        this.setState({
            day: day.target.value,
        });
    };
    //CCV
    ccvChange = value => {
        this.setState({
            ccv: value.target.value,
        });
    };

    render() {
        return (
            <InsertCard
                {...this.state}
                onNameChange={this.nameChange}
                onNumberChange={this.numberChange}
                onMonthChange={this.monthChange}
                onDayChange={this.dayChange}
                onCcvChange={this.ccvChange}
            />
        );
    }
}

export default InsertCardContainer;
