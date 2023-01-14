import React from "react";
import "./style.scss"


export const About = () => {
    return (
        <div className={"about-page"}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a2703085515699.5d7e82b446156.jpg" className="main-img"/>
            <div className="reviews">
                <h2 id={"costumer-review"}>“I love that I found this place and I have a new favorite salon!” -Ashley, Indianapolis</h2>
                <p id={"date"} style={{fontStyle : "italic", marginTop: '4%'}}>
                    June 2021
                </p>
            </div>


            <div className="storyHoursContainer" >

                        <div className='salonOwnerPic'  >
                            <div className='salonStory'  style={{zIndex: "2"}} >
                                <h1>OUR STORY</h1>
                                <p>Salon  began when Becky Bateman, the founder of the salon, relocated from Blythe to the Temecula Valley
                                    in 1971. She started working in a local salon and soon found herself in the position of becoming the owner.
                                    She then grew it to what is now known as Salon 29. Her daughter Bridget Zuniga has joined her in ownership of
                                    the salon, bringing a fresh perspective while maintaining the true spirit and foundation of the salon.</p>

                                <p> Bridget Zuniga began her career at Salon  as a receptionist at the age of 17 while
                                    she attended a local beauty school. She then followed her mother’s footsteps and began working
                                    as a stylist and taking on the role as an owner. Working alongside her family has driven her passion for</p>
                            </div>
                        <img  src="https://i.pinimg.com/564x/94/ea/d7/94ead77df9e4406fbd3d92d3ef19da17.jpg" style={{ width: '100% ' , objectFit: "cover"}}/>
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
            <hr style={{margin: '5%'}}/>

            <div className='nav' style={{display: 'grid', gap: '20px', gridTemplateColumns: "1fr 1fr 1fr", margin: "10px 20px"}}>
                <div style={{textAlign:'center'}}>
                    <label style={{position:'relative', display: 'block', marginBottom: '20px'}}>EXPLORE OUR SERVICES</label>
                <button style={{ backgroundColor: 'black', height: '100px', width: '100%', color: 'white', }}>Services</button>
                </div>
                <div style={{textAlign:'center'}}>
                    <label style={{position:'relative', display: 'block', marginBottom: '20px'}}>EXPLORE OUR SERVICES</label>
                    <button style={{ backgroundColor: 'black', height: '100px', width: '100%', color: 'white', }}>Services</button>
                </div>
                <div style={{textAlign:'center'}}>
                    <label style={{position:'relative', display: 'block', marginBottom: '20px'}}>EXPLORE OUR SERVICES</label>
                    <button style={{ backgroundColor: 'black', height: '100px', width: '100%', color: 'white', }}>Services</button>
                </div>
            </div>

            <hr style={{margin: '5%'}}/>
            <div className='salonMission'>
                <h1 style={{textAlign: 'center'}}>OUR MISSION</h1>
                <p style={{margin: " 2% 10%", textAlign: 'center'}}>We strive to create an inclusive environment where guests can feel known and taken care of.
                    We’re intentional to give each guest our undivided attention and build an environment of trust and creativity.
                    We walk alongside each of our stylists, training them and creating opportunities
                    of growth both individually and as a team. At Sisu, we are family. There is a place for you here, too.</p>
            </div>
            <div className="salonPictures" style={{display: 'grid', alignItems: 'center', gap: '20px', gridTemplateColumns: "0.7fr 1fr 0.7fr", margin: "10px 20px"}}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f78a3148469687.62d6623c0e2ce.jpg" style={{width: '100%'}}/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f78a3148469687.62d6623c0e2ce.jpg" style={{width: '100%'}}/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f78a3148469687.62d6623c0e2ce.jpg" style={{width: '100%'}}/>
            </div>

            <div className='landing' style={{backgroundColor: 'rgba(0, 0, 0, 0.91)', padding: '30px'}}>

            </div>

        </div>
    );
};
