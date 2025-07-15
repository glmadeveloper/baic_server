import express from "express";
import multer1 from "../middlewares/multer.js";

import updateHistory from "../controllers/history/update.js";
import createHistory from "../controllers/history/create.js";
import deleteHistory from "../controllers/history/delete.js";
import getAllHistory from "../controllers/history/getAll.js";
import getOneHistory from "../controllers/history/getOne.js";
import createOverview from "../controllers/overview/create.js";
import getOneOverview from "../controllers/overview/getOne.js";
import getAllOverview from "../controllers/overview/getAll.js";
import updateOverview from "../controllers/overview/update.js";
import deleteOverview from "../controllers/overview/delete.js";
import createNewsRelease from "../controllers/newsRelease/create.js";
import getOneNewsRelease from "../controllers/newsRelease/getOne.js";
import getAllNewswRelease from "../controllers/newsRelease/getAll.js";
import updateNewsRelease from "../controllers/newsRelease/update.js";
import deleteNewsRelease from "../controllers/newsRelease/delete.js";
import createModel from "../controllers/model/create.js";
import getOneModel from "../controllers/model/getOne.js";
import getAllModel from "../controllers/model/getAll.js";
import updateModel from "../controllers/model/update.js";
import deleteModel from "../controllers/model/delete.js";
import createModelCategory from "../controllers/modelCategory/create.js";
import getOneModelCategory from "../controllers/modelCategory/getOne.js";
import getAllModelCategory from "../controllers/modelCategory/getAll.js";
import updateModelCategory from "../controllers/modelCategory/update.js";
import deleteModelCategory from "../controllers/modelCategory/delete.js";
import createModelWithColors from "../controllers/modelWithColors/create.js";
import getOneModelWithColors from "../controllers/modelWithColors/getOne.js";
import getAllModelWithColors from "../controllers/modelWithColors/getAll.js";
import updateModelWithColors from "../controllers/modelWithColors/update.js";
import deleteModelWithColors from "../controllers/modelWithColors/delete.js";
import createAfterSalesService from "../controllers/afterSalesService/create.js";
import getOneAfterSalesService from "../controllers/afterSalesService/getOne.js";
import getAllAfterSalesService from "../controllers/afterSalesService/getAll.js";
import updateAfterSalesService from "../controllers/afterSalesService/update.js";
import deleteAfterSalesService from "../controllers/afterSalesService/delete.js";
import createVision from "../controllers/vision/create.js";
import getOneVision from "../controllers/vision/getOne.js";
import getAllVision from "../controllers/vision/getAll.js";
import updateVision from "../controllers/vision/update.js";
import deleteVision from "../controllers/vision/delete.js";
import createFeatureService from "../controllers/featurService/create.js";
import getOneFeatureService from "../controllers/featurService/getOne.js";
import getAllFeatureService from "../controllers/featurService/getAll.js";
import updateFeatureService from "../controllers/featurService/update.js";
import deleteFeatureService from "../controllers/featurService/delete.js";
import createContactUs from "../controllers/contactUs/create.js";
import getOneContact from "../controllers/contactUs/getOne.js";
import getAllContact from "../controllers/contactUs/getAll.js";
import createMediaContact from "../controllers/mediaContact/create.js";
import getOneMediaContact from "../controllers/mediaContact/getOne.js";
import getAllMediaContact from "../controllers/mediaContact/getAll.js";
import createSubscription from "../controllers/subscribe/create.js";
import getOneSubscribe from "../controllers/subscribe/getOne.js";
import getAllSubscribe from "../controllers/subscribe/getAll.js";
import createOffRoad from "../controllers/offRoad/create.js";
import getOneOffRoad from "../controllers/offRoad/getOne.js";
import getAllOffRoad from "../controllers/offRoad/getAll.js";
import updateOffRoad from "../controllers/offRoad/update.js";
import deleteOffRoad from "../controllers/offRoad/delete.js";
import createCapitalBeauty from "../controllers/capitalBeauty/create.js";
import getOneCapitalBeauty from "../controllers/capitalBeauty/getOne.js";
import getAllCapitalBeauty from "../controllers/capitalBeauty/getAll.js";
import updateCapitalBeauty from "../controllers/capitalBeauty/update.js";
import deleteCapitalBeauty from "../controllers/capitalBeauty/delete.js";
import createTestDrive from "../controllers/testDrive/create.js";
import getOneTestDrive from "../controllers/testDrive/getOne.js";
import getAllTestDrive from "../controllers/testDrive/getAll.js";
import updateTestDrive from "../controllers/testDrive/update.js";
import deleteTestDrive from "../controllers/testDrive/delete.js";
import createResearch from "../controllers/researchAndDevelopment/create.js";
import getOneResearch from "../controllers/researchAndDevelopment/getOne.js";
import getAllResearch from "../controllers/researchAndDevelopment/getAll.js";
import updateResearch from "../controllers/researchAndDevelopment/update.js";
import deleteResearch from "../controllers/researchAndDevelopment/delete.js";
import createMultiMedia from "../controllers/multiMedia/create.js";
import getOneMultiMedia from "../controllers/multiMedia/getOne.js";
import getAllMultiMedia from "../controllers/multiMedia/getAll.js";
import updateMultiMedia from "../controllers/multiMedia/update.js";
import deleteMultiMedia from "../controllers/multiMedia/delete.js";
import login from "../controllers/user/login.js";
import registerUser from "../controllers/user/register.js";
import verifyToken from "../middlewares/auth.js";
import createJoinUs from "../controllers/joinUs/create.js";
import getOneJoinUs from "../controllers/joinUs/getOne.js";
import getAllJoinUs from "../controllers/joinUs/getAll.js";
import updateJoinUs from "../controllers/joinUs/update.js";
import deleteJoinUs from "../controllers/joinUs/delete.js";
import createConceptCar from "../controllers/conceptCar/create.js";
import getOneConceptCar from "../controllers/conceptCar/getOne.js";
import getAllConceptCar from "../controllers/conceptCar/getAll.js";
import updateConceptCar from "../controllers/conceptCar/update.js";
import deleteConceptCar from "../controllers/conceptCar/delete.js";
import createCookiePolicy from "../controllers/cookiePolicy/create.js";
import getOneCookiePolicy from "../controllers/cookiePolicy/getOne.js";
import getAllCookiePolicy from "../controllers/cookiePolicy/getAll.js";
import updateCookiePolicy from "../controllers/cookiePolicy/update.js";
import deleteCookiePolicy from "../controllers/cookiePolicy/delete.js";
import createDataProtection from "../controllers/dataProtection/create.js";
import getOneDataProtection from "../controllers/dataProtection/getOne.js";
import getAllDataProtection from "../controllers/dataProtection/getAll.js";
import updateDataProtection from "../controllers/dataProtection/update.js";
import deleteDataProtection from "../controllers/dataProtection/delete.js";
import createTermsAndCondition from "../controllers/termsAndCondition/create.js";
import getOneTermsAndCondition from "../controllers/termsAndCondition/getOne.js";
import getAllTermsAndCondition from "../controllers/termsAndCondition/getAll.js";
import updateTermsAndCondition from "../controllers/termsAndCondition/update.js";
import deleteTermsAndCondition from "../controllers/termsAndCondition/delete.js";
import createWorldWide from "../controllers/worldwide/create.js";
import getOneWorldWide from "../controllers/worldwide/getOne.js";
import getAllWorldWide from "../controllers/worldwide/getAll.js";
import updateWorldWide from "../controllers/worldwide/update.js";
import deleteWorldWide from "../controllers/worldwide/delete.js";
import createBaicInX from "../controllers/baicInX/create.js";
import getOneBaicInX from "../controllers/baicInX/getOne.js";
import getAllBaicInX from "../controllers/baicInX/getAll.js";
import updateBaicInX from "../controllers/baicInX/update.js";
import deleteBaicInX from "../controllers/baicInX/delete.js";
import createHomepage from "../controllers/homepage/create.js";
import getOneHomepage from "../controllers/homepage/getOne.js";
import getAllHomepage from "../controllers/homepage/getAll.js";
import updateHomepage from "../controllers/homepage/update.js";
import deleteHomepage from "../controllers/homepage/delete.js";
import count from "../controllers/dashboard/count.js";
let router = express.Router();
// HISTORY ROUTES ==========>
router.post(
  "/history",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  createHistory
);
router.get("/history/:id", getOneHistory);
router.get("/history", getAllHistory);
router.put(
  "/history/:id",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  updateHistory
);
router.delete("/history/:id", verifyToken, deleteHistory);

// OVERVIEW ROUTES ==========>

router.post(
  "/overview",
  verifyToken,
  multer1.uploadImg.any("files"),
  createOverview
);
router.get("/overview/:id", getOneOverview);
router.get("/overview", getAllOverview);
router.put(
  "/overview/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateOverview
);
router.delete("/overview/:id", verifyToken, deleteOverview);

// NEWS RELEASE ROUTES ==========>

router.post(
  "/news-release",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  createNewsRelease
);
router.get("/news-release/:id", getOneNewsRelease);
router.get("/news-release", getAllNewswRelease);
router.put(
  "/news-release/:id",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  updateNewsRelease
);
router.delete("/news-release/:id", verifyToken, deleteNewsRelease);

// MODEL ROUTES ==========>

router.post("/model", verifyToken, multer1.uploadImg.any("files"), createModel);
router.get("/model/:id", getOneModel);
router.get("/model", getAllModel);
router.put(
  "/model/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateModel
);
router.delete("/model/:id", verifyToken, deleteModel);

// MODEL Category ROUTES ==========>

router.post("/model-category", verifyToken, createModelCategory);
router.get("/model-category/:id", getOneModelCategory);
router.get("/model-category", getAllModelCategory);
router.put("/model-category/:id", verifyToken, updateModelCategory);
router.delete("/model-category/:id", verifyToken, deleteModelCategory);

// MODEL WITH COLORS ROUTES ==========>

router.post(
  "/model-with-colors",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  createModelWithColors
);
router.get("/model-with-colors/:id", getOneModelWithColors);
router.get("/model-with-colors", getAllModelWithColors);
router.put(
  "/model-with-colors/:id",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  updateModelWithColors
);
router.delete("/model-with-colors/:id", verifyToken, deleteModelWithColors);

//AFTER SALES SERVICE ROUTES =========>

router.post(
  "/after-sales-service",
  verifyToken,
  multer1.uploadImg.any("files"),
  createAfterSalesService
);
router.get("/after-sales-service/:id", getOneAfterSalesService);
router.get("/after-sales-service", getAllAfterSalesService);
router.put(
  "/after-sales-service/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateAfterSalesService
);
router.delete("/after-sales-service/:id", verifyToken, deleteAfterSalesService);

// VISION ROUTES ========>
router.post(
  "/vision",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  createVision
);
router.get("/vision/:id", getOneVision);
router.get("/vision", getAllVision);
router.put(
  "/vision/:id",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  updateVision
);
router.delete("/vision/:id", verifyToken, deleteVision);

// Feature Service Routes ==========>

router.post(
  "/feature-service",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  createFeatureService
);
router.get("/feature-service/:id", getOneFeatureService);
router.get("/feature-service", getAllFeatureService);
router.put(
  "/feature-service/:id",
  verifyToken,
  multer1.uploadImg.fields([{ name: "image", maxCount: 1 }]),
  updateFeatureService
);
router.delete("/feature-service/:id", verifyToken, deleteFeatureService);

// Contact Us ROutes =========>
router.post(
  "/contact-us",

  createContactUs
);
router.get("/contact-us/:id", getOneContact);
router.get("/contact-us", getAllContact);

// Media Contact ROutes =========>
router.post(
  "/media-contact",

  createMediaContact
);
router.get("/media-contact/:id", getOneMediaContact);
router.get("/media-contact", getAllMediaContact);

// Subscribe ROutes =========>
router.post(
  "/subscribe",

  createSubscription
);
router.get("/subscribe/:id", getOneSubscribe);
router.get("/subscribe", getAllSubscribe);

//OFF ROAD ROUTES ===========>

router.post(
  "/off-road",
  verifyToken,
  multer1.uploadImg.any("files"),
  createOffRoad
);
router.get("/off-road/:id", getOneOffRoad);
router.get("/off-road", getAllOffRoad);
router.put(
  "/off-road/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateOffRoad
);
router.delete("/off-road/:id", verifyToken, deleteOffRoad);

// CAPITAL BEAUTY ROUTES ==========>

router.post(
  "/capital-beauty",
  verifyToken,
  multer1.uploadImg.any("files"),
  createCapitalBeauty
);
router.get("/capital-beauty/:id", getOneCapitalBeauty);
router.get("/capital-beauty", getAllCapitalBeauty);
router.put(
  "/capital-beauty/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateCapitalBeauty
);
router.delete("/capital-beauty/:id", verifyToken, deleteCapitalBeauty);

// Test Drive Routes ==================>
router.post("/test-drive",  createTestDrive);
router.get("/test-drive/:id", getOneTestDrive);
router.get("/test-drive", getAllTestDrive);
router.put("/test-drive/:id", updateTestDrive);
router.delete("/test-drive/:id", deleteTestDrive);

// RESEARCH AND DEVELOPMENT =========>

router.post(
  "/research-and-development",
  verifyToken,
  multer1.uploadImg.any("files"),
  createResearch
);
router.get("/research-and-development/:id", getOneResearch);
router.get("/research-and-development", getAllResearch);
router.put(
  "/research-and-development/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateResearch
);
router.delete("/research-and-development/:id", verifyToken, deleteResearch);

// Multi Media Routes =================>

router.post(
  "/multi-media",
  verifyToken,
  multer1.uploadImg.fields([{ name: "media", maxCount: 1 }]),
  createMultiMedia
);
router.get("/multi-media/:id", getOneMultiMedia);
router.get("/multi-media", getAllMultiMedia);
router.put(
  "/multi-media/:id",
  verifyToken,
  multer1.uploadImg.fields([{ name: "media", maxCount: 1 }]),
  updateMultiMedia
);
router.delete("/multi-media/:id", verifyToken, deleteMultiMedia);

// USER ROUTES ===========>
router.post("/login", login);
router.post("/register", registerUser);

// JOIN US ROUTES =========>
router.post("/join-us",  multer1.uploadImg.fields([{ name: "pdf", maxCount: 1 }]), createJoinUs);
router.get("/join-us/:id", getOneJoinUs);
router.get("/join-us", verifyToken ,getAllJoinUs);
router.put("/join-us/:id",  multer1.uploadImg.fields([{ name: "pdf", maxCount: 1 }]),updateJoinUs);
router.delete("/join-us/:id",  deleteJoinUs);

// Concept Car Routes ==============>

router.post(
  "/concept-car",
  verifyToken,
  multer1.uploadImg.any("files"),
  createConceptCar
);
router.get("/concept-car/:id", getOneConceptCar);
router.get("/concept-car", getAllConceptCar);
router.put(
  "/concept-car/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateConceptCar
);
router.delete("/concept-car/:id", verifyToken, deleteConceptCar);

// Cookie Policy Routes =============>
router.post("/cookie-policy", verifyToken, createCookiePolicy);
router.get("/cookie-policy/:id", getOneCookiePolicy);
router.get("/cookie-policy", getAllCookiePolicy);
router.put("/cookie-policy/:id", verifyToken, updateCookiePolicy);
router.delete("/cookie-policy/:id", verifyToken, deleteCookiePolicy);

// Data Protection Routes =============>
router.post("/data-protection", verifyToken, createDataProtection);
router.get("/data-protection/:id", getOneDataProtection);
router.get("/data-protection", getAllDataProtection);
router.put("/data-protection/:id", verifyToken, updateDataProtection);
router.delete("/data-protection/:id", verifyToken, deleteDataProtection);

// Terms And Conditions Routes =============>
router.post("/terms-and-condition", verifyToken, createTermsAndCondition);
router.get("/terms-and-condition/:id", getOneTermsAndCondition);
router.get("/terms-and-condition", getAllTermsAndCondition);
router.put("/terms-and-condition/:id", verifyToken, updateTermsAndCondition);
router.delete("/terms-and-condition/:id", verifyToken, deleteTermsAndCondition);

// Terms And Conditions Routes =============>
router.post("/worldwide", verifyToken, createWorldWide);
router.get("/worldwide/:id", getOneWorldWide);
router.get("/worldwide", getAllWorldWide);
router.put("/worldwide/:id", verifyToken, updateWorldWide);
router.delete("/worldwide/:id", verifyToken, deleteWorldWide);

// BAIC IN X ROUTES ==============>

router.post(
  "/baic-in-x",
  verifyToken,
  multer1.uploadImg.any("files"),
  createBaicInX
);
router.get("/baic-in-x/:id", getOneBaicInX);
router.get("/baic-in-x", getAllBaicInX);
router.put(
  "/baic-in-x/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateBaicInX
);
router.delete("/baic-in-x/:id", verifyToken, deleteBaicInX);

// Home Page Routes =================>

router.post(
  "/homepage",
  verifyToken,
  multer1.uploadImg.any("files"),
  createHomepage
);
router.get("/homepage/:id", getOneHomepage);
router.get("/homepage", getAllHomepage);
router.put(
  "/homepage/:id",
  verifyToken,
  multer1.uploadImg.any("files"),
  updateHomepage
);
router.delete("/homepage/:id", verifyToken, deleteHomepage);

// ROUTES FOR DASHBOARD ==========>
router.get("/count", verifyToken, count);
export default router;
