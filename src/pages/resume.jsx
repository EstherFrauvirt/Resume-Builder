import React, { useContext, useEffect, useRef } from 'react';
import { Button, Container, Typography, CssBaseline } from '@mui/material';
import dataContext from '../context/data';
import './resume.css';
import html2pdf from 'html2pdf.js';

// ... (import statements)

export default function Resume() {
    const { addCv, data } = useContext(dataContext);
    const resumeRef = useRef();

    const handleDownload = () => {
        const resumeElement = resumeRef.current;

        if (resumeElement) {
            const pdfOptions = {
                margin: 10,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };

            html2pdf().from(resumeElement).set(pdfOptions).save();
        }
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md" style={{ width: '210mm', height: '297mm' }}>
                <div style={{ backgroundColor: 'black', color: 'white' }} ref={resumeRef}>

                    <div className="container">
                        <div className="profile">
                            {/* Add your profile details here */}
                          
                                <img   className="img" src={data.imageUrl} alt="pic" />
                                <div className="det">
                                    <Typography variant="h2">{data.firstName}</Typography>
                                    <Typography variant="h2" className="orange">{data.lastName}</Typography>
                                    
                                </div>
                          

                            <article className="left">
                                <div className="contact">
                                    <div className="col">
                                        <ul className="first">
                                            <li>phone</li>
                                 
                                            <li>email</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>{data.phone}</li>
                                        
                                            <li>{data.email}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="about">
                                    <Typography variant="h3">ABOUT ME</Typography>
                                    <Typography variant="p">I am developer 😊🤑</Typography>
                                </div>
                            </article>
                        </div>
                    </div>
                    <main className="container">
                        <div className="section">
                            <Typography variant="h2">Experience</Typography>
                            {data.workExperience.map((exp, index) => (
                                <div key={index} className="text">
                                    {/* Experience details */}
                                    <div className="header">
                                        <Typography variant="h6">{exp.companyName}</Typography>
                                        <Typography variant="p">{`${exp.from} - ${exp.to}`}</Typography>
                                    </div>
                                    <article className="right">
                                        <Typography variant="h4">{exp.position}</Typography>
                                        <Typography variant="p">{exp.description}</Typography>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </main>
                    <main className="container">
                        <div className="section">
                            <Typography variant="h2">Education</Typography>
                            {data.education.map((edu, index) => (
                                <div key={index} className="text">
                                    {/* Education details */}
                                    <div className="header">
                                        <Typography variant="h6">{edu.learnSubject}</Typography>
                                        <Typography variant="p">{`${edu.from} - ${edu.to}`}</Typography>
                                    </div>
                                    <article className="right">
                                        {/* Add additional education details as needed */}
                                        {/* <Typography variant="h4">Degree</Typography> */}
                                        {/* <Typography variant="p">Additional education description</Typography> */}
                                    </article>
                                </div>
                            ))}
                        </div>
                    </main>

                </div>
                <Button onClick={() => handleDownload()} variant="contained" color="primary">
                    Export to PDF
                </Button>
                
                <Button onClick={() => addCv()} variant="contained" color="secondary">
                    Save
                </Button>
            </Container>
        </>
    );
}

