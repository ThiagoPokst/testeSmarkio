const { Router } = require('express'); // desestruturaçao  
const { textToAudio } = require('./controllers/watsonController');
const CommentController = require('./controllers/commentController');

const routes = Router();

routes.get('/comments', commentController.index);
routes.post('/comments', commentController.store);
routes.delete('/comments/:comment_id', commentController.destroy);

routes.post('/synthesize', watsonController.textToAudio);

module.exports = routes;
