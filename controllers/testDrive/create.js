import TestDrive from '../../models/testDrive.js';
import nodemailer from 'nodemailer';
import Model from '../../models/model.js';
import ModelCategory from '../../models/modelCategory.js';

const salesMail = async (req, res) => {
  try {
    let formGender = 'Male';
    let dataGender;
    if (req.body.gender === formGender) {
      dataGender = 'Mr';
    } else if (req.body.gender === 'Company') {
      dataGender = 'Company';
    } else {
      dataGender = 'Ms';
    }
    const data = {
      country: req.body.country,
      emirate: req.body.emirate,
      gender: req.body.gender,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      modelId: req.body.modelId,
    };
    const transporter = nodemailer.createTransport({
      // host: 'smtp.titan.email',
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        // user: 'developer@glmaagency.com', // Replace with your SMTP username
        user: 'Notification@alshaalimoto.com', // Replace with your SMTP username
        // pass: 'b{%J7#&Ug-i6<8', // Replace with your SMTP password b{%J7#&Ug-i6<8
        pass: 'S.643564018255og', // Replace with your SMTP password
      },
    });
    const id = data['modelId']; // Ensure `modelId` is a number
    // console.log('modelId:', modelId);
    const model = await Model.findOne({
      where: { id: id },
      attributes: ['name'],
      include: [
        {
          model: ModelCategory,
        },
      ],
    });
    const ModelName = model.name;
    console.log('Model Name:', model.name);

    const mailOptions = {
      // from: 'developer@glmaagency.com',
      from: 'Notification@alshaalimoto.com',
      to: 'crm@alshaalimoto.com,marketing.mgr@alshaalimoto.com,developer.glmadubai@gmail.com',
      // to: 'developer.glmadubai@gmail.com',
      subject: 'Test Drive Responses',
      text: 'Got Responses!!',
      html: `<div>
      <p>Hi,</p> 
      <p>Customer responses have been received through the Test Drive form.</p>
      <p>* Title:- ${data.gender}</p>  
      <p>* Country:- ${data.country}</p> 
      <p>* Emirate:- ${data.emirate}</p> 
      <p>* Name:- ${data.name}</p> 
      <p>* Email:- ${data.email}</p> 
      <p>* Mobile:-  ${data.phoneNumber}</p>  
      <p>* model Name:- ${ModelName}</p>
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

    const testDrive = await TestDrive.create(data);

    if (testDrive) {
      return res.json({
        status: true,
        message: 'Test Drive Created Successfully!',
        data: testDrive,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Test Drive is Not Created!!!',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default salesMail;
