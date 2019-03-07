# Planets API with Sequelize and Express!

_Introduction_

For this exercise you will be implementing a planet database and data layer for creating and querying different planets, as well as, sending json data to the browser.

### Setup
- Fork and clone this repo
- `cd` into the repo and run `createdb solar_system_db`
- Take a moment to glance over the provided files.  There is a `models.js` file (add the database name), a `resetDb` script, and scripts in `package.json`, feel free to add your own.
- Lastly, run `npm install`.

## The Model
To start, define a `Planet` model inside `models.js` with three columns:
- name (text)
- num_moons (integer)
- color (text)

**Don't forget to add `Planet` to the exports at the bottom of your file.**

### Planet API
```
BASE_URL: 'https://wdi-nyc-planets-api.herokuapp.com'

Endpoints: /planets and /planets/random

```
## Deliverables:

In `scratch.js`:
1. Test your models, by creating a planet to make sure everything is functioning the way you want?
1. Did you import the planet model?
1. Once the model is correct, `touch server.js` file:
    - require express.
    - have the app listen on port 3000.
    - use `res.send` to show 'Hello Friend' on the `/` path.
    - `npm start`
1. Next, make planets routes that should return the planets with a `GET` request.
    - the first request should `findAll` planets.
    - the following request should `findOne` planet.
1. Now, use `POST` and `DELETE` to post and delete a planet.
    - the `POST` request should use `create` in sequelize.
    - the `DELETE` request should use `destroy` in sequelize.

### References
- [Express Lesson](https://git.generalassemb.ly/wdi-nyc-bananas/js-express-intro-lesson)
- [Express docs](https://expressjs.com/)

##### Further Reading (for bonus/tomorrow)
- [Sequelize Associations](http://docs.sequelizejs.com/manual/tutorial/associations.html)


#### Bonus

1. Use the random endpoint (`/planet/random`) to `GET`
a random planet from the API and display it in the browser.


#### Super(nova) Bonus

1. Create a model for stars with attributes name, size and life_cycle (i.e., supernova, white dwarf).
2. Create a bunch of stars using sequelize.
3. Write a `GET` request to return all the stars you created.
4. Use sequelize associations to relate planets and stars (the subject of our lesson tomorrow).

#### Relax with some planet gifs!
![](https://media.giphy.com/media/l4FGJQvXJdKsBboha/giphy.gif)

![](https://media.giphy.com/media/l0He3o8pL9AebplFm/giphy.gif)

![](https://media.giphy.com/media/3o7buctjKD8g5r4544/giphy.gif)
