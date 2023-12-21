import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import dataContext from '../context/data';
import UploadImage from './upImage';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Avatar from '@mui/material/Avatar';
import UpImage from './upImage';
import { useNavigate } from 'react-router-dom'

const StyledForm = styled('form')({
  '& > div': {
    marginBottom: '20px',
  },
});

export default function FormResume() {
  const { data, setData } = useContext(dataContext);
  const navigate = useNavigate();

  const handleInputChange = (e, section, index, subfield) => {
    setData((prevData) => {
      const newData = { ...prevData };
      if (index !== undefined && subfield) {
        newData[section][index][subfield] = e.target.value;
      } else if (index !== undefined) {
        newData[section][index] = { ...newData[section][index], [e.target.name]: e.target.value };
      } else {
        newData[section] = e.target.value;
      }
      return newData;
    });
  };


  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to create your resume
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Please fill in the following details
      </Typography>
      <StyledForm>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First name"
              name="firstName"
              variant="outlined"
              value={data.firstName}
              onChange={(e) => handleInputChange(e, 'firstName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              variant="outlined"
              value={data.lastName}
              onChange={(e) => handleInputChange(e, 'lastName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              value={data.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              variant="outlined"
              value={data.phone}
              onChange={(e) => handleInputChange(e, 'phone')}
            />
          </Grid>
          {/* Add similar TextField components for email, phone, and address */}
        </Grid>

        <div>
          <label>Work Experience</label>
          {data.workExperience.map((experience, index) => (
            <Grid container spacing={2} key={index} style={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company name"
                  name={`workExperience[${index}].companyName`}
                  variant="outlined"
                  value={experience.companyName}
                  onChange={(e) => handleInputChange(e, 'workExperience', index, 'companyName')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="From"
                  name={`workExperience[${index}].from`}
                  variant="outlined"
                  value={experience.from}
                  onChange={(e) => handleInputChange(e, 'workExperience', index, 'from')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="To"
                  name={`workExperience[${index}].to`}
                  variant="outlined"
                  value={experience.to}
                  onChange={(e) => handleInputChange(e, 'workExperience', index, 'to')}
                />
              </Grid>
            </Grid>

          ))}
        </div>

        <label>Education</label>
        {data.education.map((education, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Learn subject"
                  name={`education[${index}].learnSubject`}
                  variant="outlined"
                  value={education.learnSubject}
                  onChange={(e) => handleInputChange(e, 'education', index, 'learnSubject')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="From"
                  name={`education[${index}].from`}
                  variant="outlined"
                  value={education.from}
                  onChange={(e) => handleInputChange(e, 'education', index, 'from')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="To"
                  name={`education[${index}].to`}
                  variant="outlined"
                  value={education.to}
                  onChange={(e) => handleInputChange(e, 'education', index, 'to')}
                />
              </Grid>
            </Grid>
          </div>
        ))}

        {/* Profile Picture */}
   

        <UpImage handleFileChange={handleFileChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            navigate('/resume')
          }}
        >
          Create My Resume
        </Button>
      </StyledForm>
    </>
  );
}
