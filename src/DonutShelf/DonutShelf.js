import DonutColumn from "../DonutColumn"

const DonutShelf = ({ donutShelfData }) => {
 return (
     <>
     {donutShelfData.map((el) => {
         return (
             <DonutColumn key={el.name} columnData={el} />
         )
     })}
     </>
 )
}

export default DonutShelf