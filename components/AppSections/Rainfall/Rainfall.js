/* IMPORTS */

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
import styles from './Rainfall.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */

function StatBar(props) {
  console.log('props.date');
  console.log(props.date);

  return (<li className={styles.rfStat}>
    {/* Stat Bar */}
    <div className={styles.rfStatBar}>
      {/* Bar Filler */}
      <div className={styles.rfStatFill}></div>
      {/* Bar Value */}
      <div className={styles.rfStatVal} style={{ flexBasis: `${props.rain}%` }} ></div>
    </div>
    {/* Stat Date */}
    <p className={styles.rfStatDate}>{props.date.toString().length === 1 && '0'}{props.date}</p>
  </li>);
}


export default function Rainfall(params) {
  console.log(`Rendering RAINFALL`);



  return (
    // <div className={styles.rainfall}>
    <div className={'alphaCard'}>
      {/* Rainfall */}

      {params.segProps === undefined ? <Loader /> : <>
        {/* Rainfall Header */}
        {/* <div className={styles.rfHeader}> */}
        <div className={'alphaHeader'}>
          {/* Header */}
          {/* Title */}
          {/* <p className={styles.rfTitle}>Rainfall</p> */}
          <p className={'alphaTitle'}>Rainfall</p>
          {/* Legend Optional */}
        </div>

        {/* Rainfall Body */}
        <div className={styles.rfBody}>
          {/* Body */}
          {/* Rainfall Stat Section */}
          <ul className={styles.rfStats}>
            {/* Bi-Weekly Statistics */}
            {/* Stat Item */}
            {params.segProps.map((cur, id) => {
              return <StatBar date={cur.time.date} rain={cur.rain} key={`rain-${id}`} />
            })}
          </ul>

        </div>
      </>}


    </div>

  )
}
Rainfall.displayName = 'Rainfall'