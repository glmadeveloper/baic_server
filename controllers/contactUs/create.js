import ContactUs from '../../models/contactUs.js';
import nodemailer from 'nodemailer';

const salesMail = async (req, res) => {
  try {

    let formGender = 'Male';
    let dataGender;
    if (req.body.gender === formGender) {
      dataGender = 'Mr';
    } else {
      dataGender = 'Ms';
    }
    const data = {
      gender: dataGender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mediaName: req.body.mediaName,
      email: req.body.email,
      nationality: req.body.nationality,
      phoneNumber: req.body.phoneNumber,
      mediaIntroduction: req.body.mediaIntroduction,
    };
    const transporter = nodemailer.createTransport({
      // host: 'smtp.titan.email',
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
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
      // to: 'developer.glmadubai@gmail.com',
      subject: 'Contact Us',
      text: 'Got Responses!!',
      html: `<div>
      <p>Hi,</p> 
      <p>Customer responses have been received through the contact us form.</p>
      <p>* Title:- ${data.gender}</p>  
      <p>* First Name:- ${data.firstName}</p> 
      <p>* Last Name:- ${data.lastName}</p> 
      <p>* Email:- ${data.email}</p> 
      <p>* Mobile:-  ${data.phoneNumber}</p>  
      <p>* Nationality:- ${data.nationality}</p> 
      <p>* Media Introduction:- ${data.mediaIntroduction}</p> 
      <p>Thank you</p> 
      </div>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('ERROR OCCURED WHEN SENDING MAIL!!', error);
        return;
      }
      console.log('Message sent successfully:', info.response);
      return;
    });
    const contact = await ContactUs.create(data);

    if (contact) {
      return res.json({
        status: true,
        message: 'Contact Created Successfully.',
        data: contact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Contact is Not Created',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default salesMail;
