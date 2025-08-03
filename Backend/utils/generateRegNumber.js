const RegCounter = require('../models/regcounter');

const generateRegNumber = async () => {
  const year = new Date().getFullYear().toString();

  let counter = await RegCounter.findOne({ year });

  if (!counter) {
    counter = await RegCounter.create({ year, seq: 1 });
  } else {
    counter.seq += 1;
    await counter.save();
  }

  const serial = counter.seq.toString().padStart(5, '0');
  return `REG${year}${serial}`;
};

module.exports = generateRegNumber;
