import nodemailer from "nodemailer";
const feedbackMail = async (req, res) => {
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
      gender: dataGender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      comment: req.body.comment,
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
        pass: 'S.643564018255og', // Replace with your SMTP password
      },
    });
    const mailOptions = {
      // from: 'developer@glmaagency.com',
      from: 'notification@alshaalimoto.com',
      to: 'crm@alshaalimoto.com,marketing.mgr@alshaalimoto.com',
      // to: 'developer.glmadubai@gmail.com',
      subject: 'Feedback Service',
      text: 'Got Feedback!!',
      html: `<div>
      <p>Hi,</p> 
       <p>Customer feedback has been received.</p> 
      <p> * Tile :- ${data.gender}</p> 
 <p>* First Name:- ${data.firstName}</p> 
 <p>* Last Name:- ${data.lastName}</p> 
 <p>* Email:- ${data.email}</p> 
 <p>* Mobile:-  ${data.phoneNumber}</p>  
 <p>* Conmmnet:- ${data.comment}</p> 

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

export default feedbackMail;
