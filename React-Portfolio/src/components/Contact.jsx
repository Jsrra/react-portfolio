import "../styles/contact.css"

function Contact(){
    return (
        <div className="contact-container ">
<form action="">
<div className="form-floating mb-3 input-sizing">
  <input type="name" className="form-control" id="floatingInput" placeholder="Name"></input>
  <label htmlFor="floatingInput">Name</label>
     </div>

    <div className="form-floating mb-3 input-sizing">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
  <label htmlFor="floatingInput">Email address</label>
     </div>

  <div className="form-floating input-sizing">
  <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Message</label>
</div>

<button type="button" className="btn btn-primary button-sizing">Submit</button>
        </form></div>
    )
}

export default Contact;