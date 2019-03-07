# Planet Sequelize

_Introduction_

For this exercise you will be implementing a planet database and data layer for creating and querying different planets.

### Setup
- Fork and clone this repo
- `cd` into the repo and run `createdb solar_system_db`
- Take a moment to glance over the provided files.  There is a skeleton `models.js` file, a `resetDb` script, and a few scripts in `package.json`
- Lastly, run `npm install`

## The Model

To start, define a `Planet` model inside `models.js` with three columns:
- name
- num_moons
- color

Pick sensible types for each of these columns.  Don't forget to add `Planet` to the exports at the bottom of the file.

In `main.js`:

### Deliverables

1. Create three new planets.
2. Print all of the planets.
3. Change the color of one of the planets.
4. Delete a planet with a specific id.
5. Print all of the planets where the moons are less than 100.
  - comment out your function calls at the end in the main function.

#### Bonus

1. Create a model for a star with attributes name and size (and others if you would like)
2. Create a star
3. Change an attribute of the star

##### Super Bonus

Use sequelize associations to relate planets and stars (the subject of our lesson tomorrow).
