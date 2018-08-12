import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/index';
import {pages} from '../../state/routes';
import styles from '../../styles/Home.scss';
import {PageFrame} from '../blocks/PageFrame';
import {Action} from '../buttons/Action';
import {Outline} from '../buttons/Outline';
import {Logout} from '../icons/Logout';

const handleClick = () => auth().signOut();

export const Home = () =>
  <PageFrame
    className={styles.pageFrame}
    controls={[
      <Action
        icon={Logout}
        key='logout'
        onClick={handleClick}
      />
    ]}
  >
    <ul className={styles.menu}>
      <li>
        <Outline
          as={Link}
          to={pages.listShopping}
        >
          Shopping List
        </Outline>
      </li>
      <li>
        <Outline
          as={Link}
          to={pages.listTodo}
        >
          Todo List
        </Outline>
      </li>
    </ul>
  </PageFrame>;
