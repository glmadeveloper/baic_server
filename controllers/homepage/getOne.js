import Homepage from "../../models/homePage.js";

const getOneHomepage = async (req, res) => {
  try {
    let id = req.params.id;

    const homepage = await Homepage.findOne({ where: { id: id } });
    if (homepage) {
      return res.json({
        status: true,
        message: "Homepage got Successfully.",
        data: homepage,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Homepage Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneHomepage;

// import Homepage from "../../models/homePage.js";
// import Homepagebaner from "../../models/homePagebaner.js";
// const getOneHomepage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const homepage = await Homepage.findOne({
//       where: { id: id },
//       include: [
//         {
//           model: Homepagebaner, // Make sure relation is correctly defined
//           as: "banners", // Alias of the relation defined in the model
//         },
//       ], order: [[{ model: Homepagebaner, as: "banners" }, 'id']],
//       logging: console.log,  // Log SQL query for debugging
//     });

//     if (!homepage) {
//       return res.status(404).json({
//         status: false,
//         message: "Homepage Not Found",
//         code: 404,
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       message: "Homepage retrieved successfully.",
//       data: homepage,
//       code: 200,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: false,
//       message: error.message,
//       code: 500,
//     });
//   }
// };

// export default getOneHomepage;