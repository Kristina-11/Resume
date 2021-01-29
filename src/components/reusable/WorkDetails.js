const WorkDetails = ({ props }) => {
    return (  
        <div className="learning">
            <h1>{ props.titleExperience }</h1>
            { props.experience.map((exp) => {
                return (
                    <div className="experience" key={Math.random() * 10}>
                        <div className="date">{ exp.date }</div>
                        <div className="title">{ exp.title }</div>
                        <div className="company-name">{ exp.company }</div>
                        <div className="details">
                            { exp.details }
                            <ul>
                                { exp.detailsList.map((li) => {
                                    return ( <li key={Math.random() * 10}>{ li }</li> )
                                }) }
                            </ul>
                        </div>
                    </div>
                )
            }) }

            <h1>{ props.titleEducation }</h1>
            <div className="education">
                { props.education.map((school) => {
                    return (
                        <div className="facility" key={Math.random() * 10}>
                            <h3>{ school.facility }</h3>
                            <p>{ school.course }</p>
                            <small>{ school.years }</small>
                        </div>
                    )
                }) }
                
            </div>
            
            <div className="plan">
                <h2>{ props.titlePlans }</h2>
                <ul>
                    <h3>{ props.titleCourses }</h3>
                    {
                        props.future.courses.map((course) => {
                            return ( <li key={Math.random() * 10}>{ course }</li> )
                        })
                    }

                    <h3>{ props.titleBooks }</h3>
                    {
                        props.future.books.map((book) => {
                            return ( <li key={Math.random() * 10}>{ book }</li> )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default WorkDetails;