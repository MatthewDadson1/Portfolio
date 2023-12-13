import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={require(`../../assets/contact/emailIcon.png`)} alt="Email icon" />
          <a href="mailto:myemail@email.com">MatthewDadson24@gmail.com</a>
        </li>
        
      
      </ul>
    </footer>
  );
};
