import React from "react";
import "./style.scss"
import {useScrollTop} from "../../hooks/useScrollTop";
import {NavLink} from "react-router-dom";
import {CommentsList} from "./CommentsList";
import {Gallery} from "./PhotoGallery";


export const About = () => {
    useScrollTop();
    return (
        <div className="about-page">
    <div style={{position: "relative"}}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a2703085515699.5d7e82b446156.jpg" className="main-img"/>

        <div className='imgText'>
                <h2>beau·ty</h2>
                <p>the quality of being pleasing, especially to look at, or someone or something that gives great pleasure, especially when you look at it</p>
            </div>

    </div>

            <CommentsList/>


            <div className="storyHoursContainer" >

                        <div className='salonOwnerPic'  >
                            <div className='salonStory'  >
                                <h1 style={{fontFamily: 'Playfair Display SC, serif'}}>OUR STORY</h1>
                                <p>Salon  began when Becky Bateman, the founder of the salon, relocated from Blythe to the Temecula Valley
                                    in 1971. She started working in a local salon and soon found herself in the position of becoming the owner.
                                    She then grew it to what is now known as Salon 29. Her daughter Bridget Zuniga has joined her in ownership of
                                    the salon, bringing a fresh perspective while maintaining the true spirit and foundation of the salon.</p>

                                <p> Bridget Zuniga began her career at Salon  as a receptionist at the age of 17 while
                                    she attended a local beauty school. She then followed her mother’s footsteps and began working
                                    as a stylist and taking on the role as an owner. Working alongside her family has driven her passion for</p>
                            </div>
                        <img  id='image' src="https://i.pinimg.com/564x/94/ea/d7/94ead77df9e4406fbd3d92d3ef19da17.jpg" />
                            <div className='workHours' >
                                <h1 style={{fontFamily: 'Playfair Display SC, serif'}}>HOURS:</h1><br/>
                                <p>Monday: 8am-9pm</p>
                                <p>Tuesday: 8am-9pm</p>
                                <p>Wednesday: 8am-9pm</p>
                                <p>Thursday: 8am-9pm</p>
                                <p>Friday: 8am-5pm</p>
                                <p>Saturday: 8am-5pm</p>
                                <p>Sunday: 8am-5pm</p>
                            </div>
                        </div>





        </div>
            <hr className='horizontalLine'/>

            <div className='nav' >
                <div className='buttonContainer'>
                    <label className='buttonLabel' >EXPLORE OUR SERVICES</label>
                <button  className='buttons' ><NavLink to={'/services'} className='links'>Services</NavLink></button>
                </div>
                <div className='buttonContainer'>
                    <label  className='buttonLabel' >EXPLORE OUR STYLISTS</label>
                    <button className='buttons' ><NavLink to={'/stylists'} className='links'>Stylists</NavLink></button>
                </div>
                <div className='buttonContainer'>
                    <label  className='buttonLabel' >EXPLORE OUR CONTACT</label>
                    <button className='buttons' ><NavLink to={'/contact'} className='links'>Contact</NavLink></button>
                </div>
            </div>

            <hr className='horizontalLine'/>
            <div className='salonMission'>
                <h1 style={{textAlign: 'center'}}>OUR MISSION</h1>
                <p >We strive to create an inclusive environment where guests can feel known and taken care of.
                    We’re intentional to give each guest our undivided attention and build an environment of trust and creativity.
                    We walk alongside each of our stylists, training them and creating opportunities
                    of growth both individually and as a team. At Sisu, we are family. There is a place for you here, too.</p>
            </div>
            <Gallery/>
        </div>
    );
};

