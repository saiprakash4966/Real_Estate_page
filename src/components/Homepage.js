import React from 'react'
import Header from './Pages/Header';

const HomePage = () => {
    return (
        <div>
            {/* <header>
                <div className="container">
                    <h1>THE PRIMELAND MARK</h1>
                    <nav>
                        <ul>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#about">ABOUT US</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#partners">PARTNER WITH US</a></li>
                            <li><a href="#gallery">GALLERY</a></li>
                            <li><a href="#careers">CAREERS</a></li>
                            <li><a href="#hub">KNOWLEDGE HUB</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
                
            </header> */}
            <Header />
            <section id="about">
                <div className="container">
                    <h1>
                        <img src="/images/home.jpg" alt="Dashboard Image" width='100%' />
                    </h1>
                 
                </div>
            </section>
            <section id="projects">
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="text-container" style={{ flex: 1, marginLeft: '20px' }}>
                        <h1 style={{ color: 'blue', marginBottom: '20px' }}>THE PRIME LAND MARK</h1>
                        <p style={{ color: '#555', lineHeight: '1.6' }}>
                            We work with a purpose and the purpose is to create value for everyone.
                            At Primeland, we focus on developing positive, smarter and sustainable communities to elevate the lifestyles for everyone. We believe that every customer would like to be surrounded by the finer things in life, every property we develop has been prudently considered, thoughtfully planned, methodically designed and robustly built with a seasoned buyer in mind.
                            Our commitment to our customers has been at the core of what we do and have always placed a premium on a collaborative and a “win-win” relationship’s.
                        </p>
                    </div>
                    <div className="image-container" style={{ flex: 1 }}>
                        
                        <img src="/images/project.jpg" alt="Project Image" style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} />
                        <div className="small-boxes" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                           
                            <div className="small-box" style={{ backgroundColor: 'lightblue', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '30%' }}>
                                <h3 style={{ color: '#333', marginBottom: '5px', fontWeight: 'normal' }}>INDUSTRY EXPERIENCE</h3>
                                <p style={{ color: 'navy', fontWeight: 'bold', fontSize: '30px' }}>25+</p>
                            </div>
                            
                            <div className="small-box" style={{ backgroundColor: 'lightblue', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '30%' }}>
                                <h3 style={{ color: '#333', marginBottom: '5px', fontWeight: 'normal' }}>ACRES CRAFTED</h3>
                                <p style={{ color: 'navy', fontWeight: 'bold', fontSize: '30px' }}>2K+</p>
                            </div>
                            
                            <div className="small-box" style={{ backgroundColor: 'lightblue', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '30%' }}>
                                <h3 style={{ color: '#333', marginBottom: '5px' ,fontWeight:'normal'}}>HAPPY CUSTOMERS</h3>
                                <p style={{ color: 'navy', fontWeight: 'bold' ,fontSize:'30px'}}>10K+</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>



            <section id="why-choose-primeland" style={{ backgroundColor:'lightslategrey', padding: '50px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'orange' }}>WHY CHOOSE PRIMELAND</h2>
                    <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'white' }}>We work with a purpose and the purpose is to create value for everyone.</h3>
                    <h4 style={{ textAlign: 'center', marginBottom: '20px', color: 'navy' }}>ABOUT US</h4>
                    <div className="reasons-container" style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* First row of four boxes */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div className="reason" style={{ width: '48%', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
                                <h3 style={{ color: 'orange' }}>Passion</h3>
                                <p style={{ color: 'gray' }}>We are passionate about what we do and we believe that Real Estate Development can change the landscape of the markets and also to the people’s lives. We’re relentlessly focused on growth opportunities to create increased value for everyone.</p>
                            </div>
                            <div className="reason" style={{ width: '48%', backgroundColor: 'blanchedalmond', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
                                <h3 style={{ color: 'orange' }}>Value Creation</h3>
                                <p style={{ color: 'gray' }}>We work with a purpose and the purpose is to create value for every stakeholder that is associated with us, whether it is a minute detail, a complex design, or a business transaction. We have constantly evolved to the changing markets to promote a positive change.</p>
                            </div>
                        </div>
                        {/* Second row of four boxes */}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="reason" style={{ width: '48%', backgroundColor: 'blanchedalmond', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
                                <h3 style={{ color: 'orange' }}>Commitment</h3>
                                <p style={{ color: 'gray' }}>We do what we say and believe in doing the right thing. We are honest about what we think and commit only when we have conviction. We celebrate progress not just results. We believe everything we do has to be of the highest possible standard at all times.</p>
                            </div>
                            <div className="reason" style={{ width: '48%', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '20px' }}>
                                <h3 style={{ color: 'orange' }}>Sustainability</h3>
                                <p style={{ color: 'gray' }}>What some call difficult, we love doing it. We go beyond property development to creating meaningful and sustainable communities that are built to last. We care for nature and constantly the best practices to significantly reduce the negative impact on the environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="featured-projects" style={{ backgroundColor:'white', padding: '50px 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'grey' }}>OUR FEATURED PROJECTS</h2>
                    <div className="project-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="project" style={{ flex: '1', backgroundImage: `url('/images/mahabubnagar.jpeg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '0px', color: '#fff' }}>
                            <h3>Mahabubnagar</h3>
                            <p>Telangana</p>
                        </div>
                        <div className="project" style={{ flex: '1', backgroundImage: `url('/images/TheOne.jpeg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '0px', marginLeft: '20px', color: '#fff' }}>
                            <h3>Gudur</h3>
                            <p>Telangana</p>
                        </div>
                        <div className="project" style={{ flex: '1', backgroundImage: `url('/images/mahabubnagar.jpeg')`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '0px', color: '#fff' }}>
                            <h3>The One</h3>
                            <p>Telangana</p>
                        </div>
                    </div>
                </div>
            </section>




            <section id="testimonials" style={{ backgroundColor: 'lightslategrey', padding: '50px 0', color: 'blue' }}>Testimonials
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'blue' }}>OUR CUSTOMER WORDS</h2>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="testimonial" style={{ flex: '1', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', color: '#333', fontSize: '18px' }}>
                        <h3 style={{color:'navy'}}>Anand Mishra<br />Kompally, Hyderabad</h3>
                        <img src="/images/Anand.jpg" alt="Anand Mishra" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                        <p>Best real estate company for the investment purpose in approved layouts with fabulous offers from the company.</p>
                    </div>
                    <div className="testimonial" style={{ flex: '1', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', color: '#333', fontSize: '18px', margin: '0 20px' }}>
                        <h3 style={{ color: 'navy' }}>Srinivas Rao<br />Kondapur, Hyderabad</h3>
                        <img src="/images/Anand.jpg" alt="Anand Mishra" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                        <p>I am happy that I purchased a villa with Primeland Group because the quality of materials they used are very great and long lasting.</p>
                    </div>
                    <div className="testimonial" style={{ flex: '1', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', color: '#333', fontSize: '18px' }}>
                        <h3 style={{ color: 'navy' }}>Pradeep Kumar<br />Indra Nagar, Bangalore</h3>
                        <img src="/images/Anand.jpg" alt="Anand Mishra" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                        <p>Really impressed by the customer service team, they are extremely friendly and always helpful for a picky buyer like me.</p>
                    </div>
                </div>
            </section>



            <footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#8B008B', color: '#fff', padding: '20px 0' }}>
                <div className="container">
                    <div>
                        <h3>Corporate Office:</h3>
                        <p>My Home Hub, 7th Floor, Block 2, Madhapur,</p>
                        <p>Hitechcity Hyderabad, Telangana 500033.</p>
                    </div>
                    <div>
                        <h3>Bangalore Office:</h3>
                        <p>40/1A, 1st floor, Basappa Complex,Lavelle Road, </p>
                        <p>behind Rotary Club, Bengaluru, Karnataka 560001</p>
                    </div>
                    <div>
                        <h4>Email: <a href="mailto:info@primelandindia.com" style={{ color: 'darkblue' }}>info@primelandindia.com</a></h4>
                    </div>


                </div>


                <section id="featured-projects" >
                    <div className="container">
                        <h3>OUR FEATURED PROJECTS</h3>
                        <ul>
                            <li>PEDDA AMBERPET</li>
                            <li>RESERVE</li>
                            <li>ICONIA</li>
                            <li>THE ONE</li>
                            <li>GREEN FIELDS Komatireddypally</li>
                            <li>GREEN FIELDS Nandipet</li>
                            <li>Greenfield Forever</li>

                        </ul>
                    </div>
                </section>
                <section id="video-intro">
                    <div className="container">
                        <h3>VIDEO INTRO</h3>
                        <iframe
                            width="280"   // You can adjust the width and height as needed
                            height="180"
                            src="https://www.youtube.com/embed/QvoT1e7mCiU"
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                    </div>
                </section>



            </footer>



        </div>
    );
}

export default HomePage;
