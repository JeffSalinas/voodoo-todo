import ButtonControl from '../ButtonControl'
import './ControlPanel.css'

const ControlPanel = ({selectedAction, handleActionClick, selectedType, handleTypeClick}) => {

    return (
        <>
            <div className='panel'>
                <ButtonControl selected={selectedAction} label="Sprinkles" onClick={handleActionClick}/>
                <ButtonControl selected={selectedAction} label="Filled" onClick={handleActionClick}/>
                <ButtonControl selected={selectedAction} label="Add" onClick={handleActionClick}/>
                <ButtonControl selected={selectedAction} label="Remove" onClick={handleActionClick}/>
                <ButtonControl selected={selectedAction} label="Flavor" onClick={handleActionClick}/>
            </div>
            {
                selectedAction === 'Add' && (
                    <div className='panel'>
                        <ButtonControl selected={selectedType} label="Glazed" onClick={handleTypeClick}/>
                        <ButtonControl selected={selectedType} label="Cherry" onClick={handleTypeClick}/>
                        <ButtonControl selected={selectedType} label="Chocolate" onClick={handleTypeClick}/>
                        <ButtonControl selected={selectedType} label="Maple" onClick={handleTypeClick}/>
                    </div>
                )
            }
        </>
    )
}

export default ControlPanel