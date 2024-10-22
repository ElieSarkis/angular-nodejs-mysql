const express = require('express');
const router = express.Router();
const db = require('../db-connection');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/cities');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.use('/images', express.static(path.join(__dirname, '../../images')));

router.get('/all_cities', (req, res) => {
  const sqlQuery = `
    SELECT
        city.city_id AS city_id,
        city.name AS city_name,
        city.name_native,
        city.country,
        city.continent,
        city.latitude,
        city.longitude,
        city.population,
        city.founded,
        city.image,
        JSON_ARRAYAGG(landmarks.name) AS landmarks
    FROM
        city
    LEFT JOIN
        landmarks ON city.city_id = landmarks.city_id
    GROUP BY
        city.city_id;
  `;

  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ cities: result });
    }
  });
});

router.put('/update_city_info/:id', upload.single('image'), (req, res) => {
  const { image } = req.file ? { image: 'cities/' + req.file.filename } : {};
  const cityId = req.params.id;

  if (!image) {
    return res
      .status(400)
      .json({ error: 'Image file is required for update.' });
  }

  const sqlQuery = `UPDATE city SET image = '${image}' WHERE city_id = ${cityId}`;

  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ updatedCityId: cityId });
    }
  });
});

module.exports = router;
