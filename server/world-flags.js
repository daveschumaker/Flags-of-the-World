var worldFlags = [
  {
    country: 'Afghanistan',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/af-lgflag.gif'
  },
  {
    country: 'Albania',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/al-lgflag.gif'
  },
  {
    country: 'Algeria',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ag-lgflag.gif'
  },
  {
    country: 'American Somona',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/aq-lgflag.gif'
  },
  {
    country: 'Andorra',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/an-lgflag.gif'
  },
  {
    country: 'Angola',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ao-lgflag.gif'
  },
  {
    country: 'Anguilla',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/av-lgflag.gif'
  },
  {
    country: 'Argentina',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ar-lgflag.gif'
  },
  {
    country: 'Armenia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/am-lgflag.gif'
  },
  {
    country: 'Aruba',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/aa-lgflag.gif'
  },
  {
    country: 'Australia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/as-lgflag.gif'
  },
  {
    country: 'Austria',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/au-lgflag.gif'
  },
  {
    country: 'Azerbaijan',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/aj-lgflag.gif'
  },
  {
    country: 'Bahrain',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ba-lgflag.gif'
  },
  {
    country: 'Bangladesh',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bg-lgflag.gif'
  },
  {
    country: 'Barbados',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bb-lgflag.gif'
  },   
  {
    country: 'Belarus',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bo-lgflag.gif'
  }  
]

/*
  country: {
    country: 'xxx',
    flag_img: 'xxx'
  },
 */

module.exports = {
  // Choose a random flag from our object / database of flags.
  getRandom: function() {
    var country = worldFlags[Math.floor(Math.random()*worldFlags.length)];
    return country;    
  },
  buildQuestion: function() {
    var answerCountry = this.getRandom();
    var allCountries = [];

    // Push country name into otherCountries array for our quiz.
    allCountries.push(answerCountry.country);

    do {
      var country = worldFlags[Math.floor(Math.random()*worldFlags.length)];
      var countryName = country.country;

      if (allCountries.indexOf(countryName) === -1) {
        allCountries.push(countryName);        
      }
    } while (allCountries.length < 4)
  
    console.log(allCountries);
    var resultObj = {
      country: answerCountry.country,
      flag_img: answerCountry.flag_img,
      answers: allCountries.sort()
    }

    return resultObj;
  }
}