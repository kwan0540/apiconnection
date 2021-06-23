import classes from './BusItem.module.css'

const BusItem = props => {
    let second = Math.floor(props.remaining/1000)
    let minutes = Math.floor(second/60)
    let content = <div>剩下:{minutes}分鐘</div>
    if (minutes === 0) {
        content = <div>即將到達</div>
    } else if (minutes < 0) {
        content = <div>NA</div>
    }
    let content2 = props.minutes
    if (props.minutes < 10) {
        content2 = `0${props.minutes}`
    }


    return (
        <li className={classes.bus}>
            
                <h3>{props.busroute}</h3>
                <div className={classes.hour}>抵達時間: {props.hours} : {content2}</div>
                <div className={classes.remaining}>{content}</div>
        </li>
    )
}

export default BusItem