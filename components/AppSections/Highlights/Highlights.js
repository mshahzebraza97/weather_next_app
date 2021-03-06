/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image'

// LIBRARY FUNCTIONS & STYLES
import styles from './Highlights.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */

function HighlightDetail(props) {
  let suffix;
  if (props.type === 'temp') {
    suffix = '\xB0';
  } else if (props.type === 'speed') {
    suffix = 'km/hr'
  } else if (props.type === 'per') {
    suffix = '%';
  }

  return (<p className={styles.hlDetail}>
    <span className={styles.hlDetailLabel}>{props.label}</span>
    <span className={styles.hlDetailValue}>{props.value} {suffix}</span>
  </p>);
}


export default function Highlights(params) {


  return (

    <div className={'alphaCard'}>

      {params.segProps === undefined ? <Loader /> :
        <>
          {/* Header */}
          <div className={'alphaHeader'}>
            <p className={'alphaTitle'}>Highlights</p>
          </div>

          {/* Body */}
          <div className={styles.highlights}>

            <Image src="/weather/thunder.png" alt="Weather Condition Image" width={120} height={120} className={styles.hlConditionImage} />
            <p className={styles.hlCondition}>{params.segProps.condition.text}</p>
            <p className={styles.hlTemp}>{params.segProps.temp}&#176;</p>

            <HighlightDetail type='temp' label='Feels Like' value={params.segProps.feelsLike} />
            <HighlightDetail type='speed' label='Wind' value={params.segProps.wind} />
            <HighlightDetail type='per' label='Humidity' value={params.segProps.humidity} />
          </div>
        </>
      }

    </div>
  )
}
Highlights.displayName = 'Highlights'

/*
// html example
<span>&#176;</span>

// css example
span {
  content: "\00B0";
}
// js example
  symbol = '\xB0';
 */