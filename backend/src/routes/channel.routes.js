const router = require('express').Router();
const channelController = require('../controllers/ChannelController');


router.get('/', channelController.getAllChannels);
router.get('/:id', channelController.getChannel);
router.post('/', channelController.createChannel);
router.delete('/', channelController.deleteChannel);


module.exports = router;