import nodemailer from "nodemailer";
const bookServiceMail = async (req, res) => {
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
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      gender: dataGender,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      licencePlate: req.body.licencePlate,
      emirates: req.body.emirates,
      serviceCenter: req.body.serviceCenter,
      date: req.body.date,
      time: req.body.time,
    };

    const transporter = nodemailer.createTransport({
      // host: 'mail.redspark.a2hosted.com',
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
    });
    const mailOptions = {
      // from: 'developer@glmaagency.com',
      from: 'notification@alshaalimoto.com',
      to: 'crm@alshaalimoto.com,marketing.mgr@alshaalimoto.com',
      subject: 'Booking an Appointment Service',
      text: 'Booking Appointment',
      html: `<div>
      <p>Hi,</p> 
       <p>Customer responses have been received through the Booking an Appointment form.</p> 
      <p> * Tile :- ${data.gender}</p> 
 <p>* First Name:- ${data.firstName}</p> 
 <p>* Last Name:- ${data.lastName}</p> 
 <p>* Email:- ${data.email}</p> 
 <p>* Mobile:-  ${data.phoneNumber}</p> 
 <p>* Model:- ${data.model}</p> 
 <p>* Year:- ${data.year}</p> 
 <p>* Current Millage:- ${data.mileage}</p> 
 <p>* Plate License:- ${data.licencePlate}</p> 
 <p>* Emirates:- ${data.emirates}</p> 
 <p>* ServiceCenter:- ${data.serviceCenter}</p> 
 <p>* Date:- ${data.date}</p> 
 <p>* Time:- ${data.time}</p> 

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

export default bookServiceMail;
