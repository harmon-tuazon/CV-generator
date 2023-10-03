import EducationBlock from "../educationPreview.component/educationPreview.component";
import WorkBlock from "../workPreview.component/workPreview.component";
import Phone from '../../assets/phone.png';
import Email from '../../assets/email.png';
import Home from '../../assets/home.png';
import '../../styles/resumePreviewStyling.scss'

const ResumePreview = ({generalInfo, educationInfo, workExperience}) => {
    const {fullname, email, phone, address} = generalInfo;

    return (
        <div className="resume-container">
            <div className="generalInfo-container">
                <h1 className="fullname">{fullname}</h1>
                    <p  className="contactInfo-container">
                        <span>
                            <img className="icon" src={Email} /> 
                           {`  ${email}  `} 
                            <img className="icon" src={Phone} /> 
                           {`  ${phone}  `} 
                        </span><br/>
                        <span><img className="icon" src={Home} /> {address}</span>
                    </p>
            </div><br/>

            <div className="preview-container">
                <h2 className="preview-title">Education</h2>
                {educationInfo.map(info => {
                    return  <EducationBlock 
                            key = {info.id}
                            info={info}/>})}
            </div><br/>
                

            <div className="preview-container">
                <h2 className="preview-title">Professional Experience</h2>
                {workExperience.map(work => {
                    return <WorkBlock 
                            key = {work.id} 
                            work = {work} />})}
            </div>

            <div className="resume-design"></div>
        </div>
    )
}

export default ResumePreview;