import AfterSalesService from "../../models/afterSalesService.js";
const getOneAfterSalesService = async (req, res) => {
    try {
      let id = req.params.id;
  
      const afterSalesService = await AfterSalesService.findOne({ where: { id: id } });
      if (afterSalesService) {
        return res.json({
          status: true,
          message: "After Sales Service got Successfully.",
          data: afterSalesService,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "After Sales Service Not Found",
          code: 404,
        });
      }
    } catch (error) {
      return res.json({ status: false, message: error.message, code: 500 });
    }
  };
  
  export default getOneAfterSalesService;