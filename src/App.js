import { useState } from 'react'
import './App.css';
import { initialData } from './const';
import ControlPanel from './ControlPanel';
import DonutShelf from './DonutShelf';

function App() {
  const [donutShelfData, setDonutShelfData] = useState(initialData)
  const [selectedAction, setSelectedAction] = useState('Add')
  const [selectedType, setSelectedType] = useState('Glazed')

  const handleActionClick = (label) => {
      setSelectedAction(label)
  }

  const handleTypeClick = (label) => {
      setSelectedType(label)
  }

  return (
    <div className="app-container">
      <ControlPanel 
        selectedAction={selectedAction} 
        handleActionClick={handleActionClick}
        selectedType={selectedType}
        handleTypeClick={handleTypeClick}
      />
      <DonutShelf donutShelfData={donutShelfData}/>
    </div>
  );
}

export default App;
