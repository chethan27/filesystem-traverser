const router = require("express").Router();
let Stats = require("../models/stats.models");
const stats_retriever = require("../controllers/stats-upload");

router.route("/").get((req, res) => {
  Stats.find()
    .then(stats => res.json(stats))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route('/add').post((req,res)=>{
    console.log(req.body);
    const nooffiles = req.body.no_of_files;
    const max_fsize = req.body.max_size;
    const avg_fsize = req.body.avg_size;
    const list_of_ext = req.body.list_of_ext;
    const max_use_ext = req.body.list_of_ext;
    const max_use_no = req.body.no_max_ext;

  const newStats = new Stats({nooffiles,max_fsize,avg_fsize,list_of_ext,max_use_ext,max_use_no});
    console.log(newStats);
    newStats.save()
        .then(()=> res.json('stats saved'))
        .catch(err=>res.status(400).json('Error'+err));
})

router.route("/add1").post(async (req, res) => {
  try {
    let currentStats = stats_retriever();
    console.log(currentStats);
    currentStats.list_of_ext  = currentStats.list_of_ext.filter(a=>a!='')
    Stats.create(currentStats)
      .then(() => res.json("stats added"))
      .catch(err => res.status(400).json("Error" + err));
  } catch (e) {
    console.log("error in add", error);
  }
}); 

module.exports = router;
