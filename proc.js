const os = require('os');

const systemCpuCores = os.cpus();

console.log(systemCpuCores);
const numOfCpus = os.cpus().length
console.log(numOfCpus)