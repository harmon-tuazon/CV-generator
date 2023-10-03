import { useState } from 'react';
import Arrow from '../../assets/accordionArrow.png';
import WorkForm from '../work-exp-form.component/work-exp-form.component';
import Button from "../button.component/button.component";
import '../../styles/formsStyling.scss'


const WorkFormList = ({workExperience, 
                       onHandleChange, 
                       onHandleClearAll, 
                       onHandleAdd,
                       onHandleDelete}) => {
                                
                                
    const [isActive, setIsActive] = useState(false);
    
    const handleOpen = () => {
        setIsActive(!isActive)
    };

    return (
        <div className="form-container">
            <div className="form-title"> 
                <h2>Professional Experience</h2>
                <img src= {Arrow} onClick={handleOpen} className={isActive ? 'open':'closed'}/>
            </div>
            
            <div className='form-box'>
            {isActive && 
                <Button 
                    onClick={onHandleAdd} 
                    type="button" 
                    buttonStyleType="add">+</Button>}

            {isActive && (workExperience.map(work => {
                    return (<WorkForm 
                                work = {work}
                                key = {work.id}
                                onHandleChange = {onHandleChange}
                                onHandleClearAll={onHandleClearAll}
                                onHandleDelete={onHandleDelete}
                                /> )})
                )}
            </div> 
        </div>
    )
}

export default WorkFormList;