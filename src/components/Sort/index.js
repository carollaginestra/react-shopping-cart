import React from 'react';
import { connect } from 'react-redux';
import { updateSort } from '../../store/cart/actions';
import { selectCartSort } from '../../store/cart/selectors';
import Selectbox from '../Selectbox';

const sortBy = [
    { value: 'asc', label: 'Lowest to highest' },
    { value: 'desc', label: 'Highest to lowest' },
];

class Sort extends React.Component {
    handleSort = value => {
        this.props.updateSort(value);
    };

    render() {
        return (
            <div className="sort">
                Order by{' '}
                <Selectbox
                    options={sortBy}
                    value={this.props.sort}
                    handleOnChange={this.handleSort}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sort: selectCartSort(state),
});

const mapDispatchToProps = {
    updateSort,
};

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default Connect(Sort);
