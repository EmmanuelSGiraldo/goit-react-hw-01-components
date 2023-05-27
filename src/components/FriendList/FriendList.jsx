import PropTypes from "prop-types";
import React from 'react';
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles["cards"]}>
          <span className={`${styles["status"]} ${friend.isOnline ? styles["online"] : styles["offline"]}`}></span>
          <img className={styles["avatar"]} src={friend.avatar} alt="Avatar de usuario" width="48" />
          <p className={styles["name"]}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  )
};

