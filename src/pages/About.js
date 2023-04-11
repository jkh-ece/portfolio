import { Fragment } from 'react';
import '../styles/About.css';

function About(about) {
  const data = about.data;

  const downloadCVHandler = (path) => {
    window.open(path);
  }

  return (
    <Fragment>
      <div className="row-about">
        <div className="about-card">
          <div className='card-title'>
            <h1>Education</h1>
          </div>
          <div className='card-contents'>
            <div className='content-main'>
              <h2>{data.education.course}</h2>
              <h3>{data.education.school} | {data.education.graduated}</h3>
            </div>
            <div className='content-support'>
              <h4>Organizations:</h4>
              <ul>
                {data.education.organization.map((org) =>
                  <li key={org.id}>
                    {org.position} - {org.name} {org.duration}
                  </li>
                )}
              </ul>
            </div>
            <div className='content-support'>
              <h4>Awards/Achievements:</h4>
              <ul>
                {data.education.awards.map((awa) =>
                  <li key={awa.id}>
                    {awa.position} - {awa.name}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="about-card">
          <div className='card-title'>
            <h1>Work Experience</h1>
          </div>
          <div className='card-contents'>
            {data.workset.map((wrk) =>
              <Fragment key={wrk.id}>
                <div className='content-main'>
                  <h2>{wrk.post}</h2>
                  <h3>{wrk.company} | {wrk.duration}</h3>
                </div>
                <div className='content-support'>
                  <ul>
                    {wrk.roles.map((rol) =>
                      <li key={rol.id}>
                        {rol.role}
                      </li>
                    )}
                  </ul>
                </div>
                <hr />
              </Fragment>
            )}
          </div>
        </div>

        <div className="about-card">
          <div className='card-title'>
            <h1>Technical Skills</h1>
          </div>
          <div className='card-contents'>
            {data.skillset.map((set) =>
              <Fragment key={set.id}>
                <div className='content-main'>
                  <h2>{set.name}</h2>
                </div>
                <div className='content-support'>
                  <ul>
                    {set.skills.map((skl) =>
                      <li key={skl.id}>
                        {skl.skill}
                      </li>
                    )}
                  </ul>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="row-about">
        <button
          value={about.CVURL}
          onClick={e => downloadCVHandler(e.target.value)}>
          Download CV</button>
      </div>
    </Fragment>
  );
}

export default About;