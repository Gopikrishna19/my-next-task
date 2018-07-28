import PropTypes from 'prop-types';
import React from 'react';
import {BlockButtonNoFootprint} from './BlockButtonNoFootprint';

const handleClick = props => () => {
  const statuses = Array.from(props.statuses.keys());
  const nextStatusIndex = (statuses.indexOf(props.status) + 1) % statuses.length;
  const nextStatus = statuses[nextStatusIndex];

  props.onChange(nextStatus);
};

export const BlockStatusToggle = props =>
  <BlockButtonNoFootprint
    className={props.className}
    onClick={handleClick(props)}
  >
    {props.statuses.get(props.status)}
  </BlockButtonNoFootprint>;

BlockStatusToggle.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  statuses: PropTypes.instanceOf(Map).isRequired
};
