const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    movieCd: String,
    movieNm: String,
    movieNmEn: String,
    prdtYear: String,
    openDt: String,
    typeNm: String,
    prdtStatNm: String,
    nationAlt: String,
    genreAlt: String,
    repNationNm: String,
    repGenreNm: String,
    directors: [
      {
        peopleNm: String
      }
    ],
    companys: [
      {
        companyCd: String,
        companyNm: String
      }
    ]
}, {
    // statics: {
    //     findAll() {
    //         return this.find({}).sort('movieNm').lean();
    //     }
    // }
});

module.exports = mongoose.model('movie', movieSchema);