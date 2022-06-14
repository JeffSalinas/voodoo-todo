import DonutBox from '../DonutBox';

const DonutShelf = ({ donutShelfData, handleBoxClick, isAdd }) => {
  return (
    <>
      {donutShelfData.map((el) => {
        return (
          <DonutBox key={el.userId} boxData={el} handleBoxClick={handleBoxClick} isAdd={isAdd} />
        );
      })}
    </>
  );
};

export default DonutShelf;
