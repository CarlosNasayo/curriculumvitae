import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles.css/skilss.css'

const Skills=()=> {
  return(
    <>
     <div className="section" id="skill">
        <div className="container">
          <div className="h4 text-center mb-4 title">Professional Skills</div>
          <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Javascript</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                        aria-valuemax="100" style={{width: '70%'}}></div><span className="progress-value"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Python</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                        aria-valuemax="100" style={{width: '70%'}}></div><span className="progress-value"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">React</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                        aria-valuemax="100" style={{width: '60%'}}></div><span className="progress-value"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Backend</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                        aria-valuemax="100" style={{width: '50%'}}></div><span className="progress-value"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Frontend</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                        aria-valuemax="100" style={{width: '70%'}}></div><span className="progress-value"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-container progress-primary"><span className="progress-badge">Microsoft Office</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                        data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                        aria-valuemax="100" style={{width: '60%'}}></div><span className="progress-value"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
    
  ) 
}

export default Skills;