import React from "react";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import FooterArch from "../../components/Footer-arch/footer-arch.jsx";
import Layout from "../../components/layout";

const Aboutus = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <Layout useSkin>
      <NavbarArch navbarRef={navbarRef} />
      <div className="pages-header circle-bg valign">
      <div className="container min-area">
        <div className="row">

      <div className="col-lg-12 valign">
        <div className="content pt-0">
          <h4 className="wow color-font animated">About us.</h4>
          <p className="wow txt animated" data-splitting="true">
          Welcome to DK Tour & Travel Services, your trusted taxi service provider in North India! We specialize in offering safe, reliable, and comfortable transportation across the stunning regions of Kashmir, Punjab, and Himachal Pradesh. Whether you're traveling for business, leisure, or seeking to explore the breathtaking landscapes, we are here to make your journey as smooth and hassle-free as possible.
          </p>
          <ul className="feat mt-20  about-list">
            <li className="wow fadeInUp" data-wow-delay=".2s">
              <h6>
                <span>1</span> Our Services
              </h6>
              <p>With years of experience in the industry, we take pride in offering a wide range of taxi services to meet the diverse needs of our clients. Our fleet includes well-maintained vehicles suited for both short and long-distance travel, ensuring a comfortable ride no matter where you're headed.</p>

              <p><span className="bold-heading">Kashmir Taxi Services: </span>Explore the mesmerizing beauty of Srinagar, Gulmarg, Pahalgam, Sonmarg, and Kupwara with our expert taxi services. Whether it's a scenic Dal Lake boat ride, a visit to the famous Hazratbal Shrine, or a trip to Yusmarg, we offer dependable transportation for sightseeing tours, airport transfers, and intercity travel across Kashmir.</p>

              <p><span className="bold-heading">Punjab Taxi Services: </span>Whether you're visiting Amritsar for its rich history, including the iconic Golden Temple, or exploring the vibrant culture of Chandigarh, our services cover all major and offbeat destinations in Punjab. We also offer taxi services to Jalandhar, Ludhiana, Patiala, and the Wagah Border.</p>

             <p><span className="bold-heading"> Himachal Pradesh Taxi Services:</span> Discover the enchanting hill stations of Shimla, Manali, Dharamshala, McLeod Ganj, Kullu, and Spiti Valley with our comfortable and reliable taxi services. From the serene beauty of Dalhousie to the adventure-filled terrain of Kangra Valley, we offer transportation for sightseeing, intercity travel, and even trekking trips across Himachal Pradesh.</p>
            </li>
                    
      <li className="wow fadeInUp" data-wow-delay=".4s">
        <h6>
          <span>2</span> Why Choose Us?
        </h6>
        <p><span className="bold-heading">Professional Drivers:</span> Our team of experienced, licensed, and courteous drivers ensures your safety and comfort. They are well-versed in local routes and can help guide you to both popular destinations and hidden gems across Kashmir, Punjab, and Himachal Pradesh.</p>

<p><span className="bold-heading">On-Time Service:</span> We understand the importance of punctuality. Whether you're headed to a meeting or catching a flight, our taxis will always arrive on time, ensuring a smooth journey.</p>

<p><span className="bold-heading">Affordable Rates:</span> We believe in offering transparent and competitive pricing without compromising on service quality. Get the best value for your travel experience with us.</p>

<p><span className="bold-heading">24/7 Availability: </span>No matter when you need us, we are available around the clock, ensuring you have transportation whenever you need it.</p>

<p><span className="bold-heading">Local Expertise:</span> As a locally-owned and operated business, we have an in-depth understanding of the best routes, destinations, and hidden gems in Kashmir, Punjab, and Himachal Pradesh. Whether you’re seeking tranquility in Nainital, adventure in Rohtang Pass, or spiritual enlightenment in Vaishno Devi, we’ve got you covered.</p>
       </li> 
       <li className="wow fadeInUp" data-wow-delay=".4s">
        <h6>
          <span>3</span>Explore the Best of Kashmir, Punjab & Himachal Pradesh with Us:</h6>

<p><span className="bold-heading">Kashmir:</span> Srinagar, Gulmarg, Pahalgam, Sonmarg, Kupwara, Jammu, Vaishno Devi, Yusmarg, Kashmir Valley, Naranag, Pulwama, Lidder River, Hemis National Park, and more.</p>
<p><span className="bold-heading">Punjab:</span> Amritsar, Golden Temple, Wagah Border, Chandigarh, Jalandhar, Ludhiana, Patiala, Ropar, Anandpur Sahib, and more.</p>
<p><span className="bold-heading">Himachal Pradesh:</span> Shimla, Manali, Dharamshala, McLeod Ganj, Kullu, Spiti Valley, Dalhousie, Kangra Valley, Rohtang Pass, Solang Valley, Kasauli, Tirthan Valley, Chamba, and more.</p>
</li>
<li className="wow fadeInUp" data-wow-delay=".4s">
        <h6><span>4</span>
Book Your Ride Today!</h6>
<p>Ready to explore the natural wonders of North India? Book your taxi with DK Tour & Travel Services today and let us take care of your travel needs. Whether you're heading to the lush landscapes of Kashmir, the cultural heart of Punjab, or the scenic hill stations of Himachal Pradesh, we are here to ensure your journey is both enjoyable and stress-free.</p></li>
      </ul>
      </div>
      </div>
        </div>
        <div className="row mb-40">
        <div className="col-md-12">
        <a className="whatsapp-link" href="https://wa.me/+919797413613">
                <p>click here to message us on </p>
                <svg fill="#25d366" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308">
<g id="XMLID_468_">
	<path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
	<path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
</g>
</svg>
                </a>| 
                <a className="whatsapp-link" href="https://wa.me/+917837477127">
                <p>click here to message us on </p>
                <svg fill="#25d366" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308">
<g id="XMLID_468_">
	<path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
	<path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
</g>
</svg>
                </a>
        </div>
      </div>
      </div>
      </div>
      <FooterArch />
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - About Dark</title>
    </>
  )
}

export default Aboutus;
