import DonutColumn from '../DonutColumn';

const DonutShelf = ({ donutShelfData, handleBoxClick, isAdd }) => {
  return (
    <>
      {donutShelfData.map((el) => {
        return (
          <DonutColumn
            key={el.userId}
            columnData={el}
            handleBoxClick={handleBoxClick}
            isAdd={isAdd}
          />
        );
      })}
    </>
  );
};

export default DonutShelf;
