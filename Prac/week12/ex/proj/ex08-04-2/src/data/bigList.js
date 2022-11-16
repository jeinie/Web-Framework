/**
 * ex08-04-2 from ch08-06-2
 * ./src/data/bigList.js
 */

import { faker } from "@faker-js/faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  job: faker.name.jobTitle(),
  country: faker.address.country(),
  avatar: faker.internet.avatar()
}));

export default bigList;