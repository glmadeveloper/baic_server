import nodemailer from "nodemailer";
const salesMail = async (req, res) => {
  try {

    console.log("BODY IN BOOKING MAIL SERVICE", req.body);

    let formGender = 'Male';
    let dataGender; 
    if (req.body.gender === formGender) {
       dataGender = 'Mr';
    } else {
       dataGender = 'Ms';
    }
 
    const data = {
      customerRequest: req.body.customerrequest,
      gender: dataGender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      model: req.body.model,
    };

    const transporter = nodemailer.createTransport({
      // host: 'smtp.titan.email',
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        // user: 'developer@glmaagency.com', // Replace with your SMTP username
        user: 'notification@alshaalimoto.com', // Replace with your SMTP username
        // pass: 'b{%J7#&Ug-i6<8', // Replace with your SMTP password b{%J7#&Ug-i6<8
        pass: 'Tot66339', // Replace with your SMTP password
      },
      // tls: {
      //   // This makes sure Nodemailer uses STARTTLS by requiring a secure connection
      //   rejectUnauthorized: true, // You can set this to `true` if you want to reject unauthorized servers
      // },
      // connectionTimeout: 70000, // Set timeout to 60 seconds
    });
    const mailOptions = {
      // from: 'developer@glmaagency.com',
      from: 'notification@alshaalimoto.com',
      to: 'crm@alshaalimoto.com,marketing.mgr@alshaalimoto.com',
      // to: 'developer.glmadubai@gmail.com',
      subject: 'Sales Service',
      text: 'Got Responses!!',
      html: `<div>
      <p>Hi,</p> 
       <p>Customer responses have been received through the sales form.</p> 
       <p>* Customer Request:- ${data.customerRequest}</p>
      <p> * Tile :- ${data.gender}</p> 
      <p>* First Name:- ${data.firstName}</p> 
      <p>* Last Name:- ${data.lastName}</p> 
      <p>* Email:- ${data.email}</p> 
      <p>* Mobile:-  ${data.phoneNumber}</p>  
      <p>* Model:- ${data.model}</p> 

<p>Thank you</p> 
</div>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("ERROR OCCURED WHEN SENDING MAIL!!", error);
        return;
      }
      console.log("Message sent successfully:", info.response);
      return;
    });
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default salesMail;
