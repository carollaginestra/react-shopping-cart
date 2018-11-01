import React from 'react';
import { connect } from "react-redux";
import { updateSort } from '../../store/cart/actions';
import { sortProducts } from '../../store/cart/selectors';
import Selectbox from '../Selectbox';

const sortBy = [
    { value: '',           label: 'Select'  },
    { value: 'lowestprice', label: 'Lowest to highest' },
    { value: 'highestprice', label: 'Highest to lowest' },
]

class Sort extends React.Component {

    handleSort = (value) => {
        this.props.updateSort(value);
    }

    render() {

        return (
            <div className="sort">
                Order by <Selectbox options={sortBy} handleOnChange={this.handleSort} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sort: sortProducts(state),
});

const mapDispatchToProps = {
    updateSort
};

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default Connect(Sort);
