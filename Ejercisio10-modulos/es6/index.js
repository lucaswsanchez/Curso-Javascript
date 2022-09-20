import * as controller from "./controller.js";

import chalk from "chalk";


const sum1 = controller.suma(1, 2);
console.log(sum1);
const sum2 = controller.suma(4, 5);
console.log(sum2);

const multi = controller.multiplica(sum1, sum2);
console.log(chalk.green(multi));
