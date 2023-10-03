import { useState } from "react";
import InputField from "../input-form.component/input-form.component"
import Button from "../button.component/button.component";
import Arrow from '../../assets/accordionArrow.png'
import '../../styles/formsStyling.scss'




const GeneralInfoForm = ({generalInfo, onHandleClearAll, onHandleChange}) => {
    const [isActive, setIsActive] = useState(true);
    const {fullname, email, phone, address} = generalInfo;
    
    const handleOpen = () => {
        setIsActive(!isActive)
    };


    return (
       <div className="form-container">

        <div className="form-title"> 
            <h2>General Information</h2>
            <img src= {Arrow} onClick={handleOpen} className={isActive ? 'open':'closed'}/>
        </div>
     
         {isActive && (<form className="form-group">
            <InputField 
                id = "fullname"
                label="Full Name" 
                type="text" 
                name="fullname" 
                value ={fullname} 
                onChange={onHandleChange}/>

            <InputField 
                id = "email"
                label="Email" 
                type="email" 
                name="email" 
                value ={email} 
                onChange={onHandleChange}/>

            <InputField 
                id="phone"
                label="Phone Number"
                type="tel" 
                name="phone" 
                value ={phone} 
                onChange={onHandleChange}/>

            <InputField 
                id="address"
                label="City and Province" 
                type="text" 
                name="address" 
                value ={address} 
                onChange={onHandleChange}/>

                <div className="button-group">
                    <Button onClick={onHandleClearAll} type="button" buttonStyleType="clear">Clear All</Button>
                </div> 

            </form> 
            )}
       </div>
    )
}

export default GeneralInfoForm;