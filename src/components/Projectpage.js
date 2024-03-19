import React from 'react'
import HeaderOne from './Pages/HeaderOne';



const ProjectPage = () => {
    return (
        <div>
            <HeaderOne/>
            <div className="container">
                <div>
                    <img src="/images/House.jpg" alt="Image" width='100%' />
                </div>


                <h1 style={{ color: 'blueviolet' }}>Welcome to Pedda Amberpet</h1>
                <p>
                    If the apartment life is more of your style then we’ve got you covered.
                    <p>
                        Live in your dream home at an excellent premium, 2 & 3 BHK apartments with exclusive amenities that let you experience luxury and comfort unlike anything else.
                    </p>
                </p>
            </div>

          <section id="features" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
    <div className="container">
        <h1 style={{ color: 'orange' }}>Project Features</h1>
                    <div>
                        <img src="/images/sports.jpg" alt="Image" width='80%' />
                    </div>
    </div>
</section>

            <section id="floor-images" style={{ backgroundColor: 'white', padding: '50px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'Blue' }}>Floor Images</h2>
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/flor1.jpeg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Floor 1</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/flor2.jpeg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', marginLeft: '20px', color: '#fff' }}>
                            <h3>Floor 2</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/flor3.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Floor 3</h3>
                        </div>
                    </div>
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/flor4.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Floor 4</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/floor5.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Floor 5</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/floor6.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Floor 6</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" style={{ backgroundColor: 'white', padding: '50px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'purple' }}>Gallery</h2>
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/Gallery1.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Gallery 1</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/Gallery2.jpeg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', marginLeft: '20px', color: '#fff' }}>
                            <h3>Gallery 2</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/Galery3.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Gallery 3</h3>
                        </div>
                    </div>
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/Gallery4.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Gallery 4</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/Gallery5.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', marginLeft: '20px', color: '#fff' }}>
                            <h3>Gallery 5</h3>
                        </div>
                        <div className="image" style={{ flex: '1', backgroundImage: `url('/images/Gallery6.jpg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '50px', marginBottom: '20px', color: '#fff' }}>
                            <h3>Gallery 6</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section id="location-advantages">
                <div className="container" >
                    <h2 style={{ color: 'navy' }}>Location Advantages</h2>
                    <div className="location-boxes" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', padding: '20px 0' }}>
                        <div>
                            <ul>
                                <li>Very close to Ramoji Film city</li>
                                <li>10 mins from Sanghi Temple</li>
                                <li>10 mins from the proposed Railway Station at Nagole</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Very next to Outer Ring Road</li>
                                <li>30 mins drive to International Airport</li>
                                <li>Close to Discoveri Oaks international School</li>
                            </ul>
                        </div>
                        <div >
                            <ul>
                                <li>Candor Shrine I School</li>
                                <li>Close proximity to Super Speciality Hospitals</li>
                                <li>Very close to RamaDevi Public School</li>
                                <li>Close to Valvoline Cummins Pvt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <iframe title="Pedda Amberpet Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5352.08157434527!2d78.69749923580825!3d17.293758570673526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9209e5741845%3A0x6b4a038bd56fc00b!2sPedda%20Amberpet%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647097921850!5m2!1sen!2sin" width="1200" height="450" style={{ border: 0 }} allowFullScreen='' loading="lazy"></iframe>
            <footer style={{backgroundColor:'magenta'}}>
                <div className="container"  style={{color:'white'}}>
                 
                    <h2>Pedda Amberpet</h2>
                    <p>
                        Hyderabad,Telangana
                    </p>
                    <p>Email:  <a href="mailto:info@primelandindia.com" style={{ color: 'blue' }}>info@primelandindia.com</a></p>

                </div>
            </footer>
        </div>
    );
}

export default ProjectPage;
