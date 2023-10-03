import { useState } from "react";
import Arrow from '../../assets/accordionArrow.png';
import EducationForm from "../education-form.component/education-form.component";
import Button from "../button.component/button.component";
import '../../styles/formsStyling.scss'


const EducationFormList = ({educationInfo, 
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
                <h2>Education</h2>
                <img src= {Arrow} onClick={handleOpen} className={isActive ? 'open':'closed'}/>
            </div>
            <div className="form-box">
            {isActive && 
                <Button 
                onClick={onHandleAdd} 
                type="button" 
                buttonStyleType="add">+</Button>}

            {isActive && (educationInfo.map(info => {
                    return (<EducationForm 
                                info = {info}
                                key = {info.id}
                                onHandleChange = {onHandleChange}
                                onHandleClearAll={onHandleClearAll}
                                onHandleDelete={onHandleDelete}
                                /> )})
                )}
            </div> 
        </div>
    )
}

export default EducationFormList;