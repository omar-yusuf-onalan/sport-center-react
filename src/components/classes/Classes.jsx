import React, { useState } from 'react';

const Classes = () => {
    const [selectedClass, setSelectedClass] = useState('yoga');

    const classData = {
        yoga: {
            title: 'Yoga',
            description: 'Why are your Yoga',
            time: [
                'Saturday-Sunday: 8:00am - 10:00am',
                'Monday-Tuesday: 10:00am - 12:00pm',
                'Wednesday-Friday: 3:00pm - 6:00pm'
            ],
            image: '../../assets/yoga.jpg'
        },
        group: {
            title: 'Group',
            description: 'Why are your Group',
            time: [
                'Saturday-Sunday: 8:00am - 10:00am',
                'Monday-Tuesday: 10:00am - 12:00pm',
                'Wednesday-Friday: 3:00pm - 6:00pm'
            ],
            image: '../../assets/group.webp'
        },
        solo: {
            title: 'Solo',
            description: 'Why are your Solo',
            time: [
                'Saturday-Sunday: 8:00am - 10:00am',
                'Monday-Tuesday: 10:00am - 12:00pm',
                'Wednesday-Friday: 3:00pm - 6:00pm'
            ],
            image: '../../assets/solo.jpg'
        },
        stretching: {
            title: 'Stretching',
            description: 'Why are your Stretching',
            time: [
                'Saturday-Sunday: 8:00am - 10:00am',
                'Monday-Tuesday: 10:00am - 12:00pm',
                'Wednesday-Friday: 3:00pm - 6:00pm'
            ],
            image: '../../assets/stret.webp'
        }
    };

    const handleClassChange = (className) => {
        setSelectedClass(className);
    };

    return (
        <section className="classes" id="classes">
            <h2>OUR CLASSES</h2>
            <div className="orange-block"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="class-buttons">
                {Object.keys(classData).map((className) => (
                    <button key={className} onClick={() => handleClassChange(className)}>
                        {classData[className].title}
                    </button>
                ))}
            </div>
            <div id="changing-class" className="changing-class">
                <div className="class-description">
                    <h3>{classData[selectedClass].description}</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima amet, illo modi eius
                        totam explicabo nulla facilis officiis, doloremque nam blanditiis alias id culpa dicta
                        necessitatibus, qui error. Corrupti?
                    </p>
                    <h3>When comes {classData[selectedClass].title} Your Time</h3>
                    {classData[selectedClass].time.map((time, index) => (
                        <h4 key={index}>{time}</h4>
                    ))}
                </div>
                <div className="image-div">
                    <img src={classData[selectedClass].image} alt={classData[selectedClass].title} />
                </div>
            </div>
        </section>
    );
};

export default Classes;
