import Donut from '../Donut/Donut';
import './DonutColumn.css';

const DonutColumn = ({ columnData, handleBoxClick, isAdd }) => {
  return (
    <div className='donut-column' onClick={() => handleBoxClick(columnData.userId)}>
      <h3>{columnData.name}</h3>
      <div className={`donut-container ${isAdd ? 'add' : ''}`}>
        {columnData.donuts.map((donutData) => {
          return (
            <Donut
              key={donutData.donutId}
              donutData={donutData}
              userId={columnData.userId}
              handleBoxClick={handleBoxClick}
              isAdd={isAdd}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DonutColumn;
