import React from 'react';
import { connect } from 'react-redux';
import SummaryList from './Summary';
import { selectCartTotal } from '../../store/cart/selectors';
import { formatCurrency } from '../../utils/money';

class Summary extends React.Component {
    render() {
        // const listItems = content.map((items, index) =>
        //     <SummaryList {...items} key={index} />
        // );

        const { cartTotal } = this.props;

        return (
            <ul className="box-content flex-wrap list-nonstyle">
                <SummaryList
                    item={<i className="fas fa-long-arrow-alt-right" />}
                >
                    Address
                </SummaryList>
                <SummaryList
                    href="/method"
                    item={<i className="fas fa-long-arrow-alt-right" />}
                >
                    Payment
                </SummaryList>
                <SummaryList item="Free">Shipping</SummaryList>
                <SummaryList item={formatCurrency(cartTotal)}>Total</SummaryList>
            </ul>
        );
    }
}

const mapStateToProps = store => ({
    cartTotal: selectCartTotal(store),
});

const Connect = connect(mapStateToProps);

export default Connect(Summary);
