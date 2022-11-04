import {faker} from "@faker-js/faker"

const bigList = [...Array(5000)].map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}))

export default bigList;