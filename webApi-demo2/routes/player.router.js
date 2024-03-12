import {Router } from 'express';
import playerController from '../controllers/player.controller.js';

const playerRouter = Router();

playerRouter.get('/')
.post(playerController.add)
.all((_,res) =>{ res.sendStatus(405) });

playerRouter.route('/:email')
.get(playerController.get)
.put(playerController.update)
.all((_, res) =>{ res.sendStatus(405)});

export default playerRouter;