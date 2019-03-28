const router = require('express').Router();
const idea = require('../controllers/idea-controller');


router.get('/', idea.fndAllIdeas);

router.post('/', idea.createIdea);

router.get('/:id', idea.findIdeaByID);

router.put('/:id',idea.updateIdeaByID);

router.delete('/:id',idea.deleteIdeaByID);

module.exports = router;