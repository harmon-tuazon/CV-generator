import InputField from "../input-form.component/input-form.component";
import Button from "../button.component/button.component";




const WorkForm = ({work,
                   onHandleChange, 
                   onHandleClearAll,
                   onHandleDelete }) => {

    const {id, jobtitle, company, description, from, to, location} = work;
    
    const handleChange = (event) => {
        onHandleChange(id, event)
    }

    return (
       <div>
         <form className="form-group">
            <InputField 
                id="jobtitle"
                label="Job Title" 
                type="text" 
                name="jobtitle"
                value ={jobtitle} 
                onChange={handleChange}/>
            <InputField     
                id="company"
                label="Company" 
                type="text" 
                name="company"
                value ={company} 
                onChange={handleChange}/>
            <InputField 
                id="description"
                label="Description" 
                type="text" 
                name="description"
                value ={description} 
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
                    id="from"
                    label="Start Date" 
                    type="month" 
                    name="from"
                    value ={from} 
                    onChange={handleChange}/>
                <InputField 
                    id="to"
                    label="End Date" 
                    type="month" 
                    name="to"
                    value ={to} 
                    onChange={handleChange} />
            </div>
            <div className="button-group">
                <Button onClick={() => onHandleClearAll(id)} type="button" buttonStyleType="clear">Clear</Button>
                <Button onClick={() => onHandleDelete(id)} type="button" buttonStyleType="clear">Delete</Button>
            </div>
        </form>
       </div>
    )
}

export default WorkForm;