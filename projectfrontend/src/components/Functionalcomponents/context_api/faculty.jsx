import Coe from './coe';

export
 const faculty = (res) =>
 {
      return (
          <div>
            <h1>Faculty is correcting papers</h1>
            <Coe sgpa={res.sgpa} cgpa={res.cgpa}/>
          </div>
      );
 }

  export default faculty;