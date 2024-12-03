const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    employee_name: {
        type: String
    },
    employee_company: {
        type: String
    },
    employee_group: {
        type: String
    },
    employee_compensation: {
        type: Number
    },
    compensation_freq: {
        type: String
    },
    employee_medical: {
        type: Number
    },
    employee_dental: {
        type: Number
    },
    tax: {
        type: Number
    },
    loan: {
        type: Number
    },
    savings: {
        type: Number
    },
    union_dues: {
        type: Number
    }
    
});

module.exports = mongoose.model('Employee', Employee);