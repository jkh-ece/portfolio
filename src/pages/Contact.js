import '../styles/Contact.css';

function Contact(contact) {
  const data = contact.data;
  console.log(data);

  const buttonHandler = (url) => {
    window.open(url);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Im still working on implementing this feature, but in the meantime, you can reach me through Facebook and LinkedIn. -JKH");
    console.log('not yet finished');
  }


  return (
    <div className="row-contact">
      <div className='contact-form'>
        <form className="form-input" onSubmit={submitHandler}>
          <h2>Contact me</h2>
          <input
            type="text"
            id="name"
            placeholder='Name'
            required />
          <input
            type="text"
            id="subject"
            placeholder='Subject'
            required />
          <input
            type="email"
            id="email"
            placeholder='Email'
            required />
          <textarea
            id="message"
            placeholder='Message'
            required />
          <button type="submit">
            Send
          </button>
        </form>
        <div className='contact-socmedia'>
        <h2>Reach me at: </h2>
          <button
            value={data.FBURL}
            onClick={e => buttonHandler(e.target.value)}>
            Facebook</button>
          <button
            value={data.LinkedInURL}
            onClick={e => buttonHandler(e.target.value)}>
            LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;