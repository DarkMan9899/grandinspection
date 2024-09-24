import React from 'react';
import '../Style/MainServices.css';


const services = [
    { icon: '🔨', title: 'Construction Consultant', description: 'Our Consultant Construction services provide expert guidance throughout all phases of your construction project. From feasibility studies and planning to execution and project management, our team of experienced consultants ensures that your project is completed on time, within budget, and to the highest standards.' },
    { icon: '📐', title: 'Architectural Design', description: 'Our Architectural Design services focus on creating innovative and sustainable building designs. We work closely with clients to understand their vision and transform it into functional, aesthetically pleasing structures. Our team specializes in a wide range of architectural styles and is committed to delivering designs that are both beautiful and practical.' },
    { icon: '💡', title: 'Electrical System', description: 'Our Electrical Systems services cover everything from the design and installation to the maintenance of electrical systems in residential, commercial, and industrial buildings. We prioritize safety and efficiency, ensuring that all electrical components are up to code and optimized for performance.' },
    { icon: '👷', title: 'General Contracting', description: 'As a full-service General Contracting firm, we oversee all aspects of your construction project. From procuring materials to coordinating subcontractors, we manage every detail with precision and professionalism. Our goal is to deliver high-quality results while maintaining clear communication and ensuring client satisfaction.' },
    { icon: '🛠️', title: 'Reconstruction Services', description: 'Our Reconstruction Services are designed to restore and enhance existing structures. Whether you\'re dealing with damage from natural disasters, wear and tear, or simply want to update your property, our team has the expertise to revitalize your space with minimal disruption.' },
    { icon: '🔧', title: 'Plumbing Services', description: 'Our comprehensive Plumbing Services include installation, repair, and maintenance of plumbing systems. From simple fixes to complex installations, our licensed plumbers ensure that your water and sewage systems are functioning efficiently and reliably. We offer solutions tailored to meet your specific needs, ensuring the longevity and safety of your plumbing infrastructure.' },
];

const Services = () => {
    return (
        <div className="container text-center my-5">
            <h2 className="title_MainServer">Main Services</h2>
            <div className="row_section">
                <div className="row">
                    {services.slice(0, 3).map((service, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="service-box p-4 d-flex align-items-center">
                                <div className="icon mr-3">{service.icon}</div>
                                <div className="main_server_text">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {services.slice(3, 6).map((service, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="service-box p-4 d-flex align-items-center">
                                <div className="icon mr-3">{service.icon}</div>
                                <div className="main_server_text">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Services;
