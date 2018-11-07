import React from 'react';
import PropTypes from 'prop-types';

class Selectbox extends React.Component {
    createOptions = options =>
        options.map(o => (
            <option value={o.value} key={o.value}>
                {o.label}
            </option>
        ));

    onChange = e => {
        this.props.handleOnChange(e.target.value);
    };

    render() {
        const { classes, options, value } = this.props;

        return (
            <select onChange={this.onChange} value={value} className={classes}>
                {this.createOptions(options)}
            </select>
        );
    }
}

Selectbox.propTypes = {
    options: PropTypes.array.isRequired,
    classes: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
};

export default Selectbox;
