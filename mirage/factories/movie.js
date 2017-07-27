import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Title ${i}`;
  },
  poster: faker.image.imageUrl()
});
