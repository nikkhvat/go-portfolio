import React from 'react';
import {Outlet} from 'react-router-dom';

import styles from './User.module.css';

const UserContainer: React.FC = () => {
  return (
    <div className={styles.container} style={{paddingTop: '10px'}} >
      <div className={styles.content} >
        <Outlet></Outlet>
      </div>
    </div>
  );
};


export default UserContainer;
