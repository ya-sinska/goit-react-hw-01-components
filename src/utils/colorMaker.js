function getRandom()
{
    let color =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() +
      '80';
    return color;
};

export {getRandom}