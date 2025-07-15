import AfterSalesService from "../../models/afterSalesService.js";

const getAllAfterSalesService = async (req, res) => {
    try {
      const afterSalesService = await AfterSalesService.findAll();
  
      if (afterSalesService) {
        return res.json({
          status: true,
          message: "After Sales Service List Successfully Located.",
          data: afterSalesService,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "After Sales Service is Not listed",
          code: 404,
        });
      }
    } catch (error) {
      return res.json({ status: false, message: error.message, code: 500 });
    }
  };
  export default getAllAfterSalesService;