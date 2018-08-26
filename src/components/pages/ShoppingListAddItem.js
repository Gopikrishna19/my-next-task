import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {defaultShoppingItem, ShoppingItem} from '../../state/ShoppingItems';
import {addShoppingItem} from '../../store/action-creators/shopping-item';
import animations from '../../styles/Animations.scss';
import {backButton} from '../../utils/buttons';
import {InputText} from '../blocks/InputText';
import {PageFrame} from '../blocks/PageFrame';
import {Action} from '../buttons/Action';
import {Cancel} from '../icons/Cancel';

class $ShoppingListAddItem extends Component {
  state = {
    shoppingItem: defaultShoppingItem.unlock()
  };

  addShoppingItem = () => {
    if (this.state.shoppingItem.name.trim()) {
      this.props.addShoppingItem(new ShoppingItem(this.state.shoppingItem));
      this.setState({
        shoppingItem: defaultShoppingItem.unlock()
      });
    }
    this.nameInput.focus();
  };

  setNameInput = input => this.nameInput = input;

  updateName = event => this.setState({
    shoppingItem: {
      ...this.state.shoppingItem,
      name: event.target.value
    }
  });

  render() {
    return (
      <PageFrame
        controls={[
          <Action
            key='add'
            onClick={this.addShoppingItem}
          >
            Add
          </Action>
        ]}
        pageAnimationClassName={animations.slideIn}
        requestFocus={true}
        title='Add an item to shop'
        titleNavButtonProps={backButton(Cancel)}
      >
        <InputText
          autoFocus={true}
          onChange={this.updateName}
          onEnter={this.addShoppingItem}
          placeholder='Enter name'
          ref={this.setNameInput}
          value={this.state.shoppingItem.name}
        />
      </PageFrame>
    );
  }
}

$ShoppingListAddItem.propTypes = {
  addShoppingItem: PropTypes.func.isRequired
};

export const ShoppingListAddItem = connect(
  null,
  {addShoppingItem}
)($ShoppingListAddItem);
