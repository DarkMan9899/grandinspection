import React, {useState} from 'react';
import '../Style/WhyChooseUs.css';

const WhyChooseUs = () => {
    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="why-choose-us">
            <h2>WHY CHOOSE US?</h2>
            <div className="item">
                <div className="title_whe" onClick={() => toggleOpen(0)}>
                    <span className="symbol">{open === 0 ? '-' : '+'}</span>
                    <span className="text">We have 30 plus years in the building industry</span>
                    <span className="arrow">{open === 0 ? <i className="fa-solid fa-angle-up"></i> :
                        <i className="fa-solid fa-angle-down"></i>}</span>
                </div>
                {open === 0 && (
                    <div className="content_whe">
                        <p>"With over three decades of experience, our expertise in the building industry is
                            unparalleled. Our extensive background allows us to handle projects of any scale and
                            complexity with confidence and precision. Our team’s seasoned knowledge ensures that every
                            project is completed to the highest standards, providing our clients with the best possible
                            outcomes."</p>
                    </div>
                )}
            </div>
            <div className="item">
                <div className="title_whe" onClick={() => toggleOpen(1)}>
                    <span className="symbol">{open === 1 ? '-' : '+'}</span>
                    <span className="text">Quality construction continues after the project</span>
                    <span className="arrow">{open === 1 ? <i className="fa-solid fa-angle-up"></i> :
                        <i className="fa-solid fa-angle-down"></i>}</span>
                </div>
                {open === 1 && (
                    <div className="content_whe">
                        <p>"Our dedication to quality construction doesn't end when the project is completed. We pride
                            ourselves on our commitment to excellence, ensuring that every detail is perfected and every
                            client's vision is fully realized. Our after-project services and support guarantee that
                            your investment remains in top condition for years to come."</p>
                    </div>
                )}
            </div>
            <div className="item">
                <div className="title_whe" onClick={() => toggleOpen(2)}>
                    <span className="symbol">{open === 2 ? '-' : '+'}</span>
                    <span className="text">We use technology to do the job more quickly</span>
                    <span className="arrow">{open === 2 ? <i className="fa-solid fa-angle-up"></i> :
                        <i className="fa-solid fa-angle-down"></i>}</span>
                </div>
                {open === 2 && (
                    <div className="content_whe">
                        <p>"We leverage the latest technology and innovative solutions to streamline our processes,
                            enabling us to complete projects more efficiently. Our use of advanced tools and techniques
                            not only speeds up construction timelines but also enhances the precision and quality of our
                            work. This commitment to technological advancement allows us to deliver exceptional results
                            on time and within budget."</p>
                    </div>
                )}
            </div>
            <div className="item">
                <div className="title_whe" onClick={() => toggleOpen(3)}>
                    <span className="symbol">{open === 3 ? '-' : '+'}</span>
                    <span className="text">Employees are continually trained on safety issues</span>
                    <span className="arrow">{open === 3 ? <i className="fa-solid fa-angle-up"></i> :
                        <i className="fa-solid fa-angle-down"></i>}</span>
                </div>
                {open === 3 && (
                    <div className="content_whe">
                        <p>"The safety and well-being of our team and clients are our top priorities. We continuously
                            train our employees in the latest safety protocols and best practices to ensure a secure and
                            efficient work environment. Our rigorous training programs ensure that all our staff are
                            well-prepared to handle any situation, making safety a cornerstone of our operations."</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhyChooseUs;
