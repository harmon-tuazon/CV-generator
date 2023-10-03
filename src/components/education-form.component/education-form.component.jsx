import InputField from "../input-form.component/input-form.component";
import Button from "../button.component/button.component";




const EducationForm = ({info,
                        onHandleChange, 
                        onHandleClearAll,
                        onHandleDelete
                        }) => {

    const {id, degree, school, location, startdate, enddate} = info;
    
    const handleChange = (event) => {
        onHandleChange(id, event)
    }
   
    return (
       <>
         <form className="form-group">
            <InputField 
                id="degree"
                label="Degree" 
                type="text" 
                name="degree"
                value ={degree} 
                onChange={handleChange}/>
            <InputField 
                id="school"
                label="School" 
                type="text" 
                name="school"
                value ={school} 
                onChange={handleChange}/>
            <InputField 
                id="location"
                label="Location" 
                type="text" 
                name="location"
                value ={location} 
                onChange={handleChange}/>
            <div>
                <InputField 
                    id="startdate"
                    label="Start Date" 
                    type="month" 
                    name="startdate"
                    value ={startdate} 
                    onChange={handleChange}/>
                <InputField 
                    id="enddate"
                    label="End Date" 
                    type="month" 
                    name="enddate" 
                    value = {enddate} 
                    onChange={handleChange}/>
            </div>
            <div className="button-group">
                <Button onClick={() => onHandleClearAll(id)} type="button" buttonStyleType="clear">Clear</Button>
                <Button onClick={() => onHandleDelete(id)} type="button" buttonStyleType="clear">Delete</Button>
            </div>
        </form> 
       </>
    )
}

export default EducationForm;