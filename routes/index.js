var express = require('express');
var router = express.Router();

// each team member should put there data here with there own branch

  const team = {
    
    ayman: {
      name: 'Ayman',
      role: 'Developer ',
      avatar: 'ayman.jpg',
      bio: 'ayman is a 20years old designer, he lives in london ontario (from Morocco). he is a fanshawe college student and he is studying IDP(interactive media design). Discuss options with clients to make sure websites meet their needs as well as the needs of their customersDevelop websites for variety of companies while maintaining consistent feel and brand awareness Programming languages: HTML/CSS, JavaScript, PHP, python. '
    },

    oualifi: {
      name: 'Oualifi',
      role: 'graphic designer',
      avatar: 'ayman.jpg',
      bio: 'Successfully manage and coordinate graphic design projects from concept through completion Work closely with clients to create vision, conceive designs, and consistently meet deadlines and requirements.Effectively build, motivate, and direct design and production teams. proficient in AI, PS, XD, ID, AE, Pr.'
    }, 

   


  }



/* GET home page. */
// This are the route

// when we hit route for index.js it hits the layout.hbs
// so it will go first to index.hbs then it will copy everything from there and will go to layout.hbs
// and the index.hbs will be injected in that body mustace tag in layout.hbs page. and all this happens dynamically.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/team/:member', function(req,res) {
  console.log(req.params.member);
  res.render('team', {person: team[req.params.member]});
})

module.exports = router;
