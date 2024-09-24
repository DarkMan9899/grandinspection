import React from 'react';
import "../Style/About_As.css";

function AboutUsPage(props) {
    return (
        <>
            <div className="about_us">
                <h1>About Us</h1>
            </div>
            <div className="container">
                <div className="section">
                    <p>The project-based organization that has been a goal for years was named "Grand Inspection." Grand
                        Inspection LLC was established in June 2020. The name originates from the Armenian words for
                        "Great Inspection or Great Investigation." The company's core activities include the development
                        of design documents for energy systems, conducting simple expert examinations of projects, and
                        carrying out construction works for energy facilities. The engineering team of the company
                        consists of employees with over 10 years of experience, who have authored more than 1,000 design
                        documents.</p>
                </div>
                <div className="section">
                    <h2>Our Services</h2>
                    <p>The company develops design and cost estimate documents for the following energy facilities:</p>
                    <ul>
                        <li>Construction of external and internal lighting networks, overhead lines, and cable lines
                            with a voltage of 0.22-0.4 kV,
                        </li>
                        <li>Construction of transformer substations, overhead lines, and cable lines with a voltage of
                            6-10 kV,
                        </li>
                        <li>Construction of transformer substations, overhead lines, and cable lines with a voltage of
                            35 kV,
                        </li>
                        <li>Construction of transformer substations with a voltage of 110-220 kV,</li>
                        <li>Construction of solar power plants.</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Expansion Projects</h2>
                    <p>Currently, the company is in the process of expanding its scope of work. The company is embarking
                        on the implementation of projects in other areas, including:</p>
                    <ul>
                        <li>Residential, public, and industrial building projects</li>
                        <li>Heating, gas supply, and ventilation projects</li>
                        <li>Water supply and drainage projects</li>
                        <li>Transportation routes.</li>
                    </ul>
                </div>
                <div className="section">
                    <p>Our primary goal is to be valued by our clients, which is based on the skilled, conscientious,
                        and hardworking engineers involved in our team.</p>
                    <p>Respectfully,</p>
                    <p>The Grand Inspection Team</p>
                </div>
            </div>
        </>


    );
}

export default AboutUsPage;
