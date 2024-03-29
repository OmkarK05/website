import React from 'react';
import styles from './ContactMe.module.scss';
import { MdEmail } from 'react-icons/md';

function ContactMe() {
  return (
    <section id='contact'>
      <div className={styles.contactContainer}>
        <div className='section-heading-container'>
          <p className='section-heading'>Get in touch</p>
          <div className='line'></div>
        </div>
        <p className={styles.thankYou}>
          I'm interested in frontend or fullstack developer opportunities.
          However, if you have other request or question, don't hesitate to
          reach out to me.
        </p>
        <div className={styles['email-container']}>
          <button className={styles.emailOuter}>
            <a href='mailto:omkesarkhane@gmail.com'>
              <div className={styles.emailContainer}>
                <MdEmail size={25}></MdEmail>
                <span className={styles.email}>Email me</span>
              </div>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
