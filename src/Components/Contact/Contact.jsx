import React from 'react'
import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<p className='res'>Sending....</p>);
    const formData = new FormData(event.target);

    formData.append("access_key", "8f0962e5-5b42-4d59-80ce-28400eb062e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<p className='res'>Email sent successfully</p>);
      event.target.reset();
    } else {
      console.log(<p className='res'>Error</p>, data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact1' id='contact'>
        <div className='contact-col1'>
        <h3>Send Us a Message</h3>
        <p>We value your feedback, questions, and suggestions as we strive to deliver outstanding service. Don’t hesitate to get in touch using the contact form or the details provided below.</p>
        <ul>
            <li><EmailIcon/> aurbizconsultants@gmail.com</li>
            <li><PhoneIcon/>+91 99463 37771</li>
            <li className='space2'>+91 99463 37774</li>
            <li className='space3'><LocationOnIcon/>4th Floor, B Block, Golden Rays,<br/>DC Hally, Bangalore, India</li>
        </ul>
        </div>
        <div className='contact-col2'>
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn-contact dark-btn-contact'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact