import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {

  let sender = nodemailer.createTransport({
    host: 'smtp.titan.email', // Replace with your SMTP server host
    port: 465, // Replace with your SMTP server port
    secure: true, // Set to true if your SMTP server uses SSL/TLS (usually port 465)
    auth: {
      user: 'developer@glmaagency.com', // Replace with your SMTP username
      pass: 'b{%J7#&Ug-i6<8', // Replace with your SMTP password
    },
  });

  let mail = {
    from: 'developer@glmaagency.com',
    to: 'developer.glmadubai@gmail.com',
    subject: 'Sending Email using Node.js',
    html: `
        <h1>Form Submission Details</h1>
        <p><strong>First Name:</strong> ${req.body.firstName || 'N/A'}</p>
        <p><strong>Last Name:</strong> ${req.body.lastName || 'N/A'}</p>
        <p><strong>Gender:</strong> ${req.body.gender || 'N/A'}</p>
        <p><strong>Nationality:</strong> ${req.body.nationality || 'N/A'}</p>
        <p><strong>Message:</strong> ${req.body.message || 'N/A'}</p>
        <p><strong>Phone Number:</strong> ${req.body.phoneNumber || 'N/A'}</p>
        <p><strong>Email:</strong> ${req.body.email || 'N/A'}</p>
        <p><strong>Country Code:</strong> ${req.body.countryCode || 'N/A'}</p>
        <p><strong>Job Title:</strong> ${req.body.jobTitle || 'N/A'}</p>
          `,
    attachments: {
      filename: 'req.body.pdf',
      path: 'https://185.199.52.174/uploads/.tmp/1723467576Test.pdf',
      // path: 'https://res.cloudinary.com/thito-holdings/image/upload/v1673289988/resume_4_ylclzl.pdf',
    },
  };

  sender.sendMail(mail, function (error, info) {
    if (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent successfully: ' + info.response, req.body);
      res.status(200).send('Email sent successfully');
    }
  });
};

export default sendEmail;
