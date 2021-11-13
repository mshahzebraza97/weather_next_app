/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';

// LIBRARY FUNCTIONS & STYLES
import styles from './Welcome.module.scss';

// COMPONENTS


/* BODY */
export default function Welcome(params) {
  console.log(`Rendering WELCOME`);
  const data = {
    time: '03:00 PM',
    day: 'Wednesday',
    date: '04 April 2021',
    isDay: true,
  }
  return (
    <>
      <div className={styles.welcome}>
        <p className={styles.currentTime}>
          {data.time}
        </p>
        <p className={styles.currentDate}>
          <span className={styles.currentDay} >{data.day}</span>, {data.date}
        </p>
        <div className={styles.greetings}>
          <Image src={`/icons/${data.isDay ? 'sun' : 'moon'}.svg`} alt='Time of Day' width={25} height={25} />
          Good Morning !
        </div>
      </div>
    </>
  )
}
Welcome.displayName = 'Welcome'
