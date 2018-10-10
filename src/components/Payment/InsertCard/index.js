import React from 'react';
import Header from '../../Header';
import { Link } from 'react-router-dom';


class InsertCard extends React.Component {
    constructor() {
        super()
        this.state = {
            // name: 'xxxxx xxx',
            number: '0000000000000000',
            month: 'xx',
            day: 'xx',
            ccv: 'XXX'
        }
    }
        
    //Name of Card
    // nameChange(n) {
    //     this.setState({
    //     name: n.target.value
    //     });
    // }
    //Card Number
    numberChange(c) {
        this.setState({
            number: c.target.value
        });
    }
    //Expiration
    monthChange(m) {
        this.setState({
            month: m.target.value
        });
    }
    dayChange(d) {
        this.setState({
            day: d.target.value
        });
    }
    //CCV 
    ccvChange(v) {
        this.setState({
            ccv: v.target.value
        });
    }

    render() {

        return (
            <div className="container">
                <Header title="Add a credit card" />
                
                <div className="flex flex-wrap">
                    <div className="credit">
                        <div>
                            <span className="card-items">
                                Card Holder
                            </span>
                            <div className="credit-name" id="name">
                            </div>
                        </div>

                        <div>
                            <p className="credit_card-number center">
                                {this.state.number}
                            </p>
                        </div>
                        
                        <div className="flex justify-between">
                            <div>
                                <span className="card-items">
                                    Expire
                                </span>
                                <p className="credit-date">
                                    {this.state.month} / {this.state.day}
                                </p>
                            </div>

                            <div>
                                <span className="card-items">
                                    CCV
                                </span>
                                <p className="credit-date">
                                    {this.state.ccv}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div> 
                        <label htmlFor="name"> NAME </label>
                        <input type="text" name="name" id="nameInput"/>

                        <label htmlFor="number"> NUMBER </label>
                        <input type="text" maxLength="16" name="number"
                            onChange={this.numberChange.bind(this)}/>

                        <label>EXPIRATION DATE</label>
                        <div>
                            <input type="text" maxLength="2" name="day"
                                onChange={this.monthChange.bind(this)}
                                placeholder="DAY" />
                        </div>
                        <div>
                            <input type="text" maxLength="2" name="month"
                                onChange={this.dayChange.bind(this)}
                                placeholder="MONTH"/>
                        </div>

                        <label htmlFor="ccv"> CCV </label>
                        <input type="text" name="ccv"
                            maxLength="3" onChange={this.ccvChange.bind(this)} />
                    </div>
                </div>
                

                <Link to="/" className="btn btn-primary btn-lg center">
                    Proceed to checkout
                </Link>

            </div>
            
        );

    }
}

// const initialState = (state = {}, actions) => {
//     let {
//         name = '',
//     } = actions;
    
//     switch (actions.type) {
//         case 'UPDATE_NAME':
//             return Object.assign({}, state, {name: name});
//         default:
//             return state
//     }
// }

// const updateNameStore = Redux.createStore(initialState)

// $('#nameInput').on('input', (e) => {
//     updateNameStore.dispatch({
//         type: 'UPDATE_NAME',
//         name: e.target.value
//     });
// });

// updateNameStore.subscribe(() => {
//     let {
//         name
//     } = updateNameStore.getState();

//     $('#name').html(name);
//     console.log(updateNameStore.getState());
// });

export default InsertCard;