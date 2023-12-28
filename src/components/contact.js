import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import FaqSection from './section-components/faq';
import Footer from './global-components/footer';
import { useFormik } from 'formik';

const Contact = () => {
	let formik= useFormik({
		initialValues:{
		  Name:'',
		  Email:'',
		  Messages:'',
		  Phone:'',
		},
		onSubmit:ContactUs
	  });
	  async function ContactUs(values){
		console.log(values);
	  }
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact" />
        <div className="contact-area pd-top-100 pd-bottom-65">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="contact-page-map">
		          <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.434991006674!2d30.958156661496176!3d30.793107018269463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95daafcf035%3A0x7421820c5e8cae42!2sTanta%2C%20Tanta%20Qism%202%2C%20Tanta%2C%20Gharbia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sbd!4v1683722408615!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen />
		        </div>
		      </div>
		      <div className="col-lg-4">
		        <form className="contact-form-wrap contact-form-bg"  onSubmit={formik.handleSubmit}>
		          <h4>Contact Now</h4>
		          <div className="rld-single-input">
		            <input type="text" placeholder="Name"  onChange={formik.handleChange} value={formik.values.Name} id='Name' />
		          </div>
		          <div className="rld-single-input">
		            <input type="text" onChange={formik.handleChange} value={formik.values.Email} placeholder="Email" id='Email'/>
		          </div>
		          <div className="rld-single-input">
		            <input type="text" onChange={formik.handleChange} value={formik.values.Phone} placeholder="Phone" id='Phone' />
		          </div>
		          <div className="rld-single-input">
		            <textarea rows={10} onChange={formik.handleChange} value={formik.values.Messages} placeholder="Messages" id='Messages' defaultValue={''} />
		          </div>
		          <div className="btn-wrap text-center">
		            <button className="btn btn-yellow">Submit</button>
		          </div>
		        </form>
		      </div>
		    </div>
		    <div className="row pd-top-92">
		      <div className="col-xl-3 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-phone" />Call Us:</p>
		          <h5>+20 1054678913</h5>
		        </div>
		      </div>
		      <div className="col-xl-3 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-fax" />Fax:</p>
		          <h5>+20 1054678913</h5>
		        </div>
		      </div>
		      <div className="col-xl-3 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-envelope" />Have any Question?</p>
		          <h5>example@campCoding</h5>
		        </div>
		      </div>
		      <div className="col-xl-3 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-phone" />Address</p>
		          <h5>Adress Here</h5>
		          <h5>Tanta,Egypt</h5>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
        <Footer />
    </div>
}

export default Contact

