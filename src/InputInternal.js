import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function pure(func) {
  class PureComponentWrap extends PureComponent {
    render() {
      return func(this.props, this.context);
    }
  }
  return PureComponentWrap;
}

const InputInternal = pure(props => (
  <input
    className={props.className}
    value={props.value}
    id={props.id}
    onBlur={props.onBlur}
    onChange={props.onChange}
    onFocus={props.onFocus}
    placeholder={props.placeholder}
    style={props.style ? props.style : {}}
    type={props.type}
  />
));

InputInternal.defaultProps = {
  className: '',
  id: false,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  style: false,
};

InputInternal.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  id: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  type: PropTypes.string.isRequired,
};

export default InputInternal;
