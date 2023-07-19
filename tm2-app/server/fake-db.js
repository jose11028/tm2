const Tmer = require('./models/tmer');

class FakeDb {
  constructor() {
      this.tmers = [{
        title: "StellarVibes",
        city: "San Francisco",
        street: "Main street",
        category: "Fashion",
        image: "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bedrooms: 4,
        shared: true,
        description: "International Model",
        dailyRate: 43
        },
        {
        title: "TrendMaven",
        city: "New York",
        street: "Time Square",
        category: "Lifestyle and Personal Development",
        image: "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bedrooms: 1,
        shared: false,
        description: "International Model",
        dailyRate: 11
        },
        {
        title: "CaptivateLife",
        city: "Spisska Nova Ves",
        street: "Banicka 1",
        category: "TheInfluenceHub",
        image: "https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        bedrooms: 5,
        shared: true,
        description: "Travel and Adventure.",
        dailyRate: 23
      }]
  }

  async cleanDb() {
    //with away, the rest of the code won't be executed until we finsih to delete the database
    await Tmer.deleteMany({});
  }

  pushTmersToDb() {
    this.tmers.forEach((tmer) => {
      //the Tmer(tmer) model is defined in model/tmer.js this is the name we gave to the scheme.
      /* In summary, the pushTmersToDb() function loops through the
      this.tmers array,creates a new instance of the Tmer model for
      each object, and saves each instance to the MongoDB database. */
      const newTmer = new Tmer(tmer);

      newTmer.save();
    })
  }

  async seedDb() {
    await this.cleanDb();
    await this.pushTmersToDb();
  }

}

module.exports = FakeDb;


