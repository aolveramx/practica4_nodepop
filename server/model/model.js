const mongoose = require('mongoose');

const adSchema = mongoose.Schema({
    article: { type: String, index: true },
    operationType: { type: String, index: true },
    price: {type: Number, index: true },
    image: String,
    category: { type: String, index: true },
});

adSchema.statics.filter = function(filtro, limit, skip, fields, sort) {
    const query = Ad.find(filtro);
    query.limit(limit);
    query.skip(skip);
    query.select(fields);
    query.sort(sort);
    return query.exec();
  }

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;