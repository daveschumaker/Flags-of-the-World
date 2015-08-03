var worldFlags = {
  Afghanistan: {
    country: 'Afghanistan',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/af-lgflag.gif'
  },
  Albania: {
    country: 'Albania',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/al-lgflag.gif'
  },
  Albania: {
    country: 'Albania',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/al-lgflag.gif'
  },
  Algeria: {
    country: 'Algeria',
    flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ag-lgflag.gif'
  },
  AmericanSomoa: {
  country: 'American Somona',
  flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/aq-lgflag.gif'
  },
  Andorra: {
  country: 'Andorra',
  flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/an-lgflag.gif'
  },
  Angola: {
  country: 'Angola',
  flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ao-lgflag.gif'
  },
  Anguilla: {
  country: 'Anguilla',
  flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/av-lgflag.gif'
  },
  Argentina: {
  country: 'Argentina',
  flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/ar-lgflag.gif'
  },
  Armenia: {
  country: 'Armenia',
  flag_img: 'https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/am-lgflag.gif'
  },
}

/*
  country: {
  country: 'xxx',
  flag_img: 'xxx'
  },
 */

module.exports = {
  // Choose a random flag from our object / database of flags.
  getRandom: function() {
    var result;
    var count = 0;
    for (var prop in worldFlags)
        if (Math.random() < 1/++count)
           result = worldFlags[prop];
    return result;    
  }
}