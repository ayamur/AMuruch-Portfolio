import { projectsData } from "../data/Projects"

const Projects = () => {
  return (
    <>
      <h1>Projects Page!</h1>
      {projectsData.length ?
        <>
          {projectsData.map((project, idx) =>
            <div key={idx}>
              <ul>
                <li>{project.title}</li>
              </ul>
            </div>
          )}
        </>
        :
        <>
          <h3>Loading Projects List Momentarily!</h3>
        </>
      }
    </>
  );
}

export default Projects