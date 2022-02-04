// const router = require('express').Router();
// const { Project, User } = require('../models');


// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const dogsData = await Dogs.findAll({
//       include: [
//         {
//           model: Owner,
//           attributes: ['name', 'age', 'size', 'breed'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const dogs = dogsData.map((dogs) => dogs.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       dogs, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/dog/:id', async (req, res) => {
//   try {
//     const dogData = await Dog.findByPk(req.params.id, {
//       include: [
//         {
//           model: Owner,
//           attributes: ['name', 'age', 'size', 'breed'],
//         },
//       ],
//     });

//     const dog = projectDog.get({ plain: true });

//     res.render('dog', {
//       ...dog,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

