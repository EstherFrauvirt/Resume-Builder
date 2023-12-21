import React, { useContext, useEffect, useState } from 'react'
import dataContext from '../../context/data'
import usersContext from '../../context/users';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import config from '../../config'
import {useNavigate} from 'react-router-dom'
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';

export default function Home() {
const navigate=useNavigate();
  const { getCvs, getAllCvs } = useContext(dataContext);
  const { user } = useContext(usersContext);
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    const admin_id = config.admin_id;
    console.log(admin_id);
    if (user) {
      if (user.uid == admin_id) {

        const promises = getAllCvs();
        promises.then((d) => setResumes(d))

      }
      else {
        const promises = getCvs();
        promises.then((d) => setResumes(d))
      }

    }




    return () => {

    }
  }, [user])


  const createNew=()=>{
    navigate('/form')
  }

  return (
    <>
      <div>here are all your resumes..</div>
      <div>
        {resumes.length === 0 ? (
          <></>
        ) : (
          <>
            <h2 style={{ textAlign: 'center' }}> Resumes:</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {resumes.map((resume,index) => (
                <div
                  key={index}
                  style={{
                    border: '1px solid #ccc',
                    backgroundColor: resume.design?.backgroundColor || '#f0f0f0',
                    borderRadius: '8px',
                    padding: '10px',
                    margin: '10px',
                    width: '300px',
                    color: resume.design?.fontColor || '#000000',
                    fontFamily: resume.design?.fontFamily || 'Arial, sans-serif',
                    fontSize: resume.design?.fontSize || '16px',
                  }}
                >
                  {/* Display the image */}
                  {resume.imageUrl && (
                    <img
                      src={resume.imageUrl}
                      alt="Resume Image"
                      style={{
                        borderRadius: '50%',
                        width: '70px',
                        height: '70px',
                      }}
                    />
                  )}

                  <p>
                    <strong>{resume.firstName} {resume.lastName} </strong>

                  </p>
                  <p>
                    <strong>Work Experience:</strong>
                  </p>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {resume.workExperience
                      .map((exp, index) => (
                        <li key={index}>
                          <p>
                            <strong>Company Name:</strong> {exp.companyName}
                          </p>
                          <p>
                            <strong>Time Frame:</strong> {exp.from}-{exp.to}
                          </p>
                        </li>
                      ))}
                  </ul>
                  <p>
                    <strong>Education Details:</strong>
                  </p>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {resume.education.map((edu, index) => (
                      <li key={index}>
                        <p>
                          <strong>Institution:</strong> {edu.learnSubject}
                        </p>
                        <p>
                          <strong>Time Frame:</strong> {edu.from}-{edu.to}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {/* Add other resume fields accordingly */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Button variant="contained" color="primary" onClick={()=>createNew()}>
      Create New
    </Button>
    </>
  )
}
