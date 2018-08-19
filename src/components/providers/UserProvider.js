import PropTypes from 'prop-types';
import {Component} from 'react';
import {connect} from 'react-redux';
import {setUser} from '../../store/action-creators/user';

class $UserProvider extends Component {
  componentDidMount() {
    this.props.setUser(this.props.user);
  }

  render() {
    return this.props.hasUser && this.props.children;
  }
}

$UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
  hasUser: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};

export const UserProvider = connect(
  ({user}) => ({hasUser: Boolean(user)}),
  {setUser}
)($UserProvider);
