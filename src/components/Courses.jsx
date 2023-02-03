import "../styles.css/courses.css";
const Courses = () => {
  return (
    <>
                <div className="h4 text-center mb-4 title">Certificates and courses</div>


      <div className="containersito container-fluid" id="courses">
        <div className="img-cont">
            <figure>
            <img src={require("../assets/images/practico.png")} alt="Image 1" />
            <div className="capa">
          </div>
            </figure>
        </div>
        <div className="img-cont">
            <figure>
            <img src={require("../assets/images/github.png")} alt="Image 1" />

            <div className="capa">
          </div>
            </figure>
        </div>
        <div className="img-cont">
            <figure>
            <img src={require("../assets/images/ingles.png")} alt="Image 1" />

            <div className="capa">
          </div>
            </figure>
            
        </div>
        <div className="img-cont">
            <figure>
            <img src={require("../assets/images/htmlcss.png")} alt="Image 1" />


            <div className="capa">
          </div>
            </figure>
            
        </div>
        <div className="img-cont">
            <figure>
            <img src={require("../assets/images/Javascript.png")} alt="Image 1" />



            <div className="capa">
          </div>
            </figure>
            
        </div>
        <div className="img-cont">
            <figure>
            <img src={require("../assets/images/scrum1.png")} alt="Image 1" />




            <div className="capa">
          </div>
            </figure>
            
        </div>
      </div>
    </>
  );
};
export default Courses;
