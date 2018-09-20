import React from 'react';
import SummaryList from './Summary';

// const content = [
//     {
//         href: '#',
//         item: 'Address',
//         result: <i className="fas fa-long-arrow-alt-right" />,
//     },
//     {
//         href: '#',
//         item: 'Payment',
//         result: <i className="fas fa-long-arrow-alt-right" />,
//     },
//     {
//         href: '#',
//         item: 'Shipping',
//         result: 'Free',
//     },
//     {
//         href: '#',
//         item: 'Total',
//         result: '$166',
//     },
// ];

class Summary extends React.Component {
    render() {
        // const listItems = content.map((items, index) =>
        //     <SummaryList {...items} key={index} />
        // );

        return (
            <ul className="box-content flex-wrap list-nonstyle">
                <SummaryList
                    item={<i className="fas fa-long-arrow-alt-right" />}
                >
                    Address
                </SummaryList>
                <SummaryList
                    item={<i className="fas fa-long-arrow-alt-right" />}
                >
                    Payment
                </SummaryList>
                <SummaryList item="Free">Shipping</SummaryList>
                <SummaryList item="$ 166">Total</SummaryList>
            </ul>
        );
    }
}

export default Summary;
