import React,{useState} from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const ContactArch = () => {
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [formStatus, setFormStatus] = useState({
      submitting: false,
      success: false,
      error: false,
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormStatus({ submitting: true, success: false, error: false });
  
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({ submitting: false, success: false, error: true });
      }
    };
  

  return (
    <section
      id="contact-arch"
      className="contact-sec style2 section-padding position-re bg-img"
      style={{ backgroundImage: "url(/img/patrn1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
            <form
        name="contact" // Form name required by Netlify
        method="POST" // Ensure this is a POST request
        data-netlify="true" // Enable Netlify form handling
        onSubmit={handleSubmit} // Handle form submission
      >
        <input type="hidden" name="form-name" value="contact" /> {/* Hidden field to specify form name */}
        
        <div class="controls">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>
            </div>

            <div class="col-lg-6">
            <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        </div>
       
       <div className="row">
        <div class="col-lg-12"><div class="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        </div>
       </div>
        <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <button type="submit" className="nb butn light mt-30 full-width" disabled={formStatus.submitting}>
              {formStatus.submitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </div>
        </div>
        </div>
      </form>

      {formStatus.success && <p>Your message has been sent!</p>}
      {formStatus.error && <p>Something went wrong. Please try again.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArch;
