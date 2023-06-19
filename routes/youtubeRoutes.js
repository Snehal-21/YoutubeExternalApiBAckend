import express from "express";
import { GetVideoComments, getAboutChannel, getChannel, getPlaylist, getSearch, getTrending, getVideoInfo, getVideoRelated } from "../controllers/youtubeControllerss.js";

const router=express.Router();

router.get('/getAboutChannel',getAboutChannel);
router.get('/getChannel',getChannel);
router.get('/getVideoRelated',getVideoRelated);//needd to check
router.get('/GetVideoComments',GetVideoComments);
router.get('/getTrending',getTrending);
router.get('/getVideoInfo',getVideoInfo);
router.get('/getPlaylist',getPlaylist);
router.get('/getSearch',getSearch)

export default router;