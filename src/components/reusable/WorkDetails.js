const WorkDetails = ({ props }) => {
    return (  
        <div className="exp">
            <div className="experience">
              { props.experience.map((exp) => {
                  return (
                      <div className="exp-work" key={Math.random() * 10}>
                          <div className="title">{ exp.title }</div>
                          <div className="date">{ exp.date }</div>
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
            </div>

             <div className="education">
              <h1 className='title'>{ props.titleEducation }</h1>
                { props.education.map((school) => {
                    return (
                        <div className="details" key={Math.random() * 10}>
                            <h3 className='date'>{ school.facility }</h3>
                            <p>{ school.course }</p>
                            <small>{ school.years }</small>
                        </div>
                    )
                }) }
            </div>
            
            <div className="plan">
                <h2 className='title'>{ props.titlePlans }</h2>
                <ul>
                    <h3 className='date'>{ props.titleCourses }</h3>
                    {
                        props.future.courses.map((course) => {
                            return ( <li key={Math.random() * 10}>{ course }</li> )
                        })
                    }

                    <h3 className='date'>{ props.titleBooks }</h3>
                    {
                        props.future.books.map((book) => {
                            return ( <li key={Math.random() * 10}>{ book }</li> )
                        })
                    }
                </ul>
            </div>

            <div className="work-progress">
                <h1 className='title'>{ props.titleProgress }</h1>
                <ul>
                {
                    props.progress.map((item) => {
                        return ( <li key={Math.random() * 10}>{ item }</li> )
                    })
                }
                </ul>
            </div> 
        </div>
    );
}
 
export default WorkDetails;