import { useState } from 'react'
import GeneralInfoForm from './components/general-info-form.component/general-info-form.component'
import ResumePreview from './components/resumePreview.component/resumePreview.component'
import EducationFormList from './components/educationFormList.component/educationFormlist.component'
import WorkFormList from './components/workFormList.component/workFormList.component'
import uniqid from './utilities/uniqid-function'
import './styles/App.scss'


const defaultGeneralInfo = {
  fullname: "Your Name Here",
  email: "sample@email.com",
  phone: "0918XXXXXX",
  address: "Vaughn, Ontario, Canada",
}


const defaultEduInfo = [
  {id: uniqid(), degree: "BS Computer Science", school: "Polytechnic Seneca College", location: "Quezon City, Philippines", startdate: "2023-09", enddate: ""},
]

const defaultWorkExp = [
  {id: uniqid(), jobtitle: "Sr. Software Engineer", company: "Notion", description: "Frontend Developer", location:"Toronto, Canada" ,from: "2023-09", to: ""},
]


function App() {
  const [generalInfo, setGeneralInfo] = useState(defaultGeneralInfo)
  const [educationInfo, setEducationInfo] = useState(defaultEduInfo)
  const [workExperience, setWorkExperience] = useState(defaultWorkExp)

  const handleGeneralInfoChange = (event) => {
    const {name, value} = event.target

    setGeneralInfo({
      ...generalInfo,
      [name]:value
    });
    
  }

  const handleClearGeneralInfo = () => {
    setGeneralInfo (defaultGeneralInfo);
  };

  const handleAddEducation = () => {
    const newEducationInfo = {
      id: uniqid(), 
      degree: "", 
      school: "", 
      location: "", 
      startdate: "", 
      enddate: ""
    }
    
    setEducationInfo([...educationInfo, newEducationInfo]); 
  }
  

  const handleEducInfoChange = (id, event) => {
    const {name, value} = event.target
    const updatedEducationInfo = educationInfo.map((info) => {
      if (id === info.id) {
        return {...info, [name]:value}
      } else {
        return info
      }
    })
    setEducationInfo(updatedEducationInfo);
  }

  const handleClearEducInfo = (id) => {

    const updatedEducationInfo = educationInfo.map((info) => {
      if (id === info.id) {
        return {  
            id: info.id,
            degree: "", 
            school: "", 
            location: "", 
            startdate: "", 
            enddate: ""
        }
      } else {
        return info
      }
    })
    setEducationInfo(updatedEducationInfo);
  };

  const handleDeleteEducInfo = (id) => {
    setEducationInfo (educationInfo.filter(info => info.id !== id));
  };



  const handleAddWork = () => {
    const newWorkExp = {
      id: uniqid(), 
      jobtitle: "",
      company: "",
      description: "",
      location: "",
      from: "",
      to: "",
    }
    
    setWorkExperience([...workExperience, newWorkExp]); 
  }

  const handleWorkChange = (id, event) => {
    const {name, value} = event.target
    const updatedWork = workExperience.map((work) => {
      if (id === work.id) {
        return {...work, [name]:value}
      } else {
        return work
      }
    })
    setWorkExperience(updatedWork);
  }

  const handleClearWork= (id) => {
    const updatedWork = workExperience.map((work) => {
      if (id === work.id) {
        return {  
            id: work.id,
            jobtitle: "", 
            degree: "", 
            location: "", 
            from: "", 
            to: ""
        }
      } else {
        return work
      }
    })
    setWorkExperience(updatedWork);
  };

  const handleDeleteWork = (id) => {
    setWorkExperience (workExperience.filter(work => work.id !== id));
  };


  return (
   <div className='main-div'>
    <div className='formsGroup'>
      <GeneralInfoForm 
          generalInfo={generalInfo} 
          onHandleChange={handleGeneralInfoChange} 
          onHandleClearAll={handleClearGeneralInfo}/>
      <EducationFormList 
          educationInfo={educationInfo}
          onHandleChange={handleEducInfoChange} 
          onHandleAdd={handleAddEducation}
          onHandleClearAll={handleClearEducInfo} 
          onHandleDelete={handleDeleteEducInfo}/>
      <WorkFormList
          workExperience={workExperience}
          onHandleChange={handleWorkChange} 
          onHandleAdd={handleAddWork}
          onHandleClearAll={handleClearWork} 
          onHandleDelete={handleDeleteWork} />
    </div>

    <div className='resumePreview'> 
     <ResumePreview 
          generalInfo={generalInfo} 
          educationInfo={educationInfo} 
          workExperience={workExperience} />
    </div>
   </div>
  )
}

export default App;
