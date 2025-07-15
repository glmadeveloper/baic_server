import ModelCategory from "../../models/modelCategory.js";

const createModelCategory = async (req, res) => {
  console.log("createModelCategory route hit");  // This will tell us if the route is triggered
  
  try {
    // Log the incoming request body to see the data being sent
    console.log("Received data:", req.body);

    // Prepare the data object
    const data = {
      name: req.body.name,
      name_ar: req.body.name_ar,
    };

    // Log the data before attempting to create the model
    console.log("Data to be saved:", data);

    // Attempt to create a new model category
    const modelCategory = await ModelCategory.create(data);

    // Log the result of the model creation
    console.log("Model Category created:", modelCategory);

    if (modelCategory) {
      // Return success response if the category is created successfully
      return res.json({
        status: true,
        message: "Model Category Created Successfully.",
        data: modelCategory,
        code: 200,
      });
    } else {
      // Return failure response if the category is not created
      return res.json({
        status: false,
        message: "Model Category is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    // Log the error to understand what went wrong
    console.error("Error occurred during Model Category creation:", error.message);
    
    // Return error response
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createModelCategory;
