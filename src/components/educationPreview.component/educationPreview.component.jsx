

const EducationBlock = ({info}) => {
    const {degree, school, location, startdate, enddate} = info;
    
    
    return (
    <div className="preview-block">
            <div className="block-grouping-left"> 
                <span className="grouping-title">
                {!startdate ? '': `${startdate} to `}
                {startdate && !enddate ? 'Present': `${enddate}` }
                </span><br />
                <span>{location}</span>
            </div>
            <div className="block-grouping-right"> 
                <span className="grouping-title">{degree}</span><br />
                <span>{school}</span>
            </div>
    </div>
    )
}

export default EducationBlock;