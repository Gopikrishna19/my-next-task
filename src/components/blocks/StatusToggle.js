import PropTypes from 'prop-types';
import React from 'react';
import {NoFootprint} from '../buttons/NoFootprint';

const handleClick = props => () => {
  const statuses = Array.from(props.statuses.keys());
  const nextStatusIndex = (statuses.indexOf(props.status) + 1) % statuses.length;
  const nextStatus = statuses[nextStatusIndex];

  props.onChange(nextStatus);
};

export const StatusToggle = props =>
  <NoFootprint
    className={props.className}
    onClick={handleClick(props)}
  >
    {props.statuses.get(props.status)}
  </NoFootprint>;

StatusToggle.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  statuses: PropTypes.instanceOf(Map).isRequired
};
