const WorkBlock = ({work}) => {
    const {jobtitle, company, description, from, to, location} = work;

    return (
        <div className="preview-block">
                <div className="block-grouping-left"> 
                    <span className="grouping-title">
                    {!from ? '': `${from} to `}
                    {from && !to ? 'Present': `${to}` }
                    </span><br/>
                    <span>{location}</span>
                </div>
                <div className="block-grouping-right"> 
                    <span className="grouping-title">{jobtitle} - </span>
                    <span>{company}</span><br/>
                    <span>{description}</span>
                </div>
    </div>
    )
}

export default WorkBlock;