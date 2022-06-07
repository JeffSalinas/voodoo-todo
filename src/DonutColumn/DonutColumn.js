import Donut from '../Donut/Donut'
import './DonutColumn.css'

const DonutColumn = ({columnData}) => {
    return <div className="donut-column">
        <h3>{columnData.name}</h3>
        <div className='donut-container'>
            {columnData.donuts.map((donutData) => {
                return (
                    <Donut donutData={donutData}/>
                )
            })}
        </div>
    </div>
}

export default DonutColumn