import React from "react";
import "./style.scss"
import {useScrollTop} from "../../hooks/useScrollTop";
import {NavLink} from "react-router-dom";


export const About = () => {
    useScrollTop();
    return (
        <div className={"about-page"}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a2703085515699.5d7e82b446156.jpg" className="main-img"/>
            <div className="reviews">
                <h2 id={"costumer-review"}>“I love that I found this place and I have a new favorite salon!” -Ashley, Indianapolis</h2>
                <p id={"date"}>
                    June 2021
                </p>
            </div>


            <div className="storyHoursContainer" >

                        <div className='salonOwnerPic'  >
                            <div className='salonStory'  >
                                <h1>OUR STORY</h1>
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
                                <h1>HOURS:</h1><br/>
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
                <p style={{margin: " 2% 10%", textAlign: 'center'}}>We strive to create an inclusive environment where guests can feel known and taken care of.
                    We’re intentional to give each guest our undivided attention and build an environment of trust and creativity.
                    We walk alongside each of our stylists, training them and creating opportunities
                    of growth both individually and as a team. At Sisu, we are family. There is a place for you here, too.</p>
            </div>
            <div className="salonPictures" >
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f78a3148469687.62d6623c0e2ce.jpg" style={{width: '100%'}}/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f78a3148469687.62d6623c0e2ce.jpg" style={{width: '100%'}}/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f78a3148469687.62d6623c0e2ce.jpg" style={{width: '100%'}}/>
            </div>



        </div>
    );
};

