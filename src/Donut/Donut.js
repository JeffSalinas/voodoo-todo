import './Donut.css'

const Donut = ({donutData}) => {
    const { flavor, sprinkles, filled } = donutData;
    const donutDescription = `donut ${flavor}${filled ? '-filled' : ''}`;

    return (
        <div className="donut-shape">
            <div className={donutDescription}/>
            {sprinkles && <img src="./images/sprinkles.png" className="sprinkles" alt='donut'/>}
        </div>
    )
}

export default Donut