import PropTypes from 'prop-types';
import React from 'react';
import {group} from '../utils/group-by';
import {noOp} from '../utils/helpers';
import {BlockListSplitter} from './BlockListSplitter';

const renderChild = props =>
  item => props.children({
    index: props.list.indexOf(item),
    item
  });

export const BlockGroupBy = props => {
  const groups = group(props.list, props.shouldGroup).by(props.by);

  return Object.keys(groups)
    .sort(props.sort)
    .map(
      groupName =>
        <React.Fragment key={groupName}>
          <BlockListSplitter
            className={props.splitterClassName}
            title={props.title(groupName)}
          />
          {groups[groupName].map(renderChild(props))}
        </React.Fragment>
    );
};

BlockGroupBy.propTypes = {
  by: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  shouldGroup: PropTypes.bool.isRequired,
  sort: PropTypes.func,
  splitterClassName: PropTypes.string,
  title: PropTypes.func
};
BlockGroupBy.defaultProps = {
  title: noOp
};
