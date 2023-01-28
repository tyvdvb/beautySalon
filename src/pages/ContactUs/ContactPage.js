import "./style.scss"

export const Contacts = () => {
    return(
        <div style={{padding: '0 60px'}}>
            <h2 className='pageTitle'>Contact</h2>
            <hr style={{margin: '5% 0'}}/>
            <div className='container'>
                <div>
                    <div className='text'>
                        <h3>Need A Little More Info?</h3>
                        <p>
                            Get in touch and we will be happy to speak with you.
                        </p>
                    </div>

                    <div className='buttons-container'>
                        <button className='buttons'>Call Us</button>
                        <button className='buttons'>Text Us</button>
                        <button className='buttons'>Email Us</button>
                    </div>

                </div>
                <img src='https://i.pinimg.com/564x/d6/ef/fd/d6effdf00d49794f75b1a96151519f74.jpg' className='cardImg'/>

            </div>
            <hr style={{margin: '5% 0'}}/>
            <div className='containerMap'>
                <div className='contactInfo'>
                    <h4 >VISIT US</h4>
                    <p>4201 30th St #100,
                        San Diego, CA </p>
                    <h4>PHONE</h4>
                    <p>(619)-677-2078</p>
                    <h4>EMAIL</h4>
                    <p>Management@salon.com</p>

                </div>
                <div style={{width: "100%"}}>
                    <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
                </div>

            </div>

        </div>
    )
}