const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    nooffiles:{type:String,required:true},
    max_fsize:{type:Number,required:true},
    avg_fsize:{type:Number,required:true},
    list_of_ext:[{type:String,required:true}],
    max_use_ext:{type:String,required:true},
    max_use_no:{type:Number,required:true},
    // dir_path:{type:String,required:true},
    // ten_path:[{type:String}]
},
{
    timestamps:true
}
);

const Stats = mongoose.model('Stats',StatsSchema);

module.exports = Stats;