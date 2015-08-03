
// TODO: Add this stuff to a database.
// Then we can track how many times flags are incorrectly guessed or properly guessed.
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
  },
  {
    country: 'Belgium',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/be-lgflag.gif'
  },
  {
    country: 'Belize',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bh-lgflag.gif'
  },
  {
    country: 'Benin',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bn-lgflag.gif'
  },
  {
    country: 'Bermuda',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bd-lgflag.gif'
  },
  {
    country: 'Bhutan',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bt-lgflag.gif'
  },
  {
    country: 'Boliva',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bl-lgflag.gif'
  },
  {
    country: 'Bosnia and Herzegovina',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bk-lgflag.gif'
  },
  {
    country: 'Botswana',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bc-lgflag.gif'
  },
  {
    country: 'Brazil',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/br-lgflag.gif'
  },
  {
    country: 'British Virgin Islands',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/vi-lgflag.gif'
  },
  {
    country: 'Brunei',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bx-lgflag.gif'
  },
  {
    country: 'Bulgaria',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bu-lgflag.gif'
  },
  {
    country: 'Burkina Faso',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/uv-lgflag.gif'
  },
  {
    country: 'Burma',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/bm-lgflag.gif'
  },
  {
    country: 'Burundi',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/by-lgflag.gif'
  },
  {
    country: 'Cabo Verde',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cv-lgflag.gif'
  },
  {
    country: 'Cambodia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cb-lgflag.gif'
  },
  {
    country: 'Cameroon',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cm-lgflag.gif'
  },
  {
    country: 'Canada',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ca-lgflag.gif'
  },
  {
    country: 'Cayman Islands',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cj-lgflag.gif'
  },
  {
    country: 'Central African Republic',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ct-lgflag.gif'
  },
  {
    country: 'Chad',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cd-lgflag.gif'
  },
  {
    country: 'Chile',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ci-lgflag.gif'
  },
  {
    country: 'China',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ch-lgflag.gif'
  },
  {
    country: 'Christmas Island',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/kt-lgflag.gif'
  },
  {
    country: 'Colombia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/co-lgflag.gif'
  },
  {
    country: 'Comoros',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cn-lgflag.gif'
  },
  {
    country: 'Democratic Republic of the Congo',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cg-lgflag.gif'
  },
  {
    country: 'Republic of the Congo',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cf-lgflag.gif'
  },
  {
    country: 'Cook Islands',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cw-lgflag.gif'
  },
  {
    country: 'Costa Rica',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cs-lgflag.gif'
  },
  {
    country: 'Cote d\'Ivoire',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/iv-lgflag.gif'
  },
  {
    country: 'Croatia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/hr-lgflag.gif'
  },
  {
    country: 'Cuba',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cu-lgflag.gif'
  },
  {
    country: 'Curacao',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cc-lgflag.gif'
  },
  {
    country: 'Cyprus',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/cy-lgflag.gif'
  },
  {
    country: 'Czech Republic',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ez-lgflag.gif'
  },
  {
    country: 'Denmark',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/da-lgflag.gif'
  },
  {
    country: 'Djibouti',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/dj-lgflag.gif'
  },
  {
    country: 'Dominica',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/do-lgflag.gif'
  },
  {
    country: 'Dominican Republic',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/dr-lgflag.gif'
  },
  {
    country: 'Ecuador',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ec-lgflag.gif'
  },
  {
    country: 'Egypt',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/eg-lgflag.gif'
  },
  {
    country: 'El Salvador',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/es-lgflag.gif'
  },
  {
    country: 'Equatorial Guinea',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ek-lgflag.gif'
  },
  {
    country: 'Eritrea',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/er-lgflag.gif'
  },
  {
    country: 'Estonia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/en-lgflag.gif'
  },
  {
    country: 'Ethiopia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/et-lgflag.gif'
  },
  {
    country: 'Falkland Islands',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/fk-lgflag.gif'
  },
  {
    country: 'Faroe Islands',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/fo-lgflag.gif'
  },
  {
    country: 'Fiji',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/fj-lgflag.gif'
  },
  {
    country: 'Finland',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/fi-lgflag.gif'
  },
  {
    country: 'France',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/fr-lgflag.gif'
  },
  {
    country: 'French Polynesia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/fp-lgflag.gif'
  },
  {
    country: 'Gabon',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/gb-lgflag.gif'
  },
  {
    country: 'The Gambia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ga-lgflag.gif'
  },
  {
    country: 'Georgia',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/gg-lgflag.gif'
  },
  {
    country: 'Germany',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/gm-lgflag.gif'
  },
]

/*
** Country Template:
  {
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