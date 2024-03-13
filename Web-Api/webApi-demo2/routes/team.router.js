import { Router } from 'express';
import playerController from '../controllers/player.controller.js';
import teamController from '../controllers/team.controller.js';


const teamRouter = Router();

teamRouter.route('/')
.get(teamController.getAll)
.post(teamController.add)
.all((_,res) =>{ res.sendStatus(405)});

teamRouter.route('/:id')
.get(teamController.get)
.put(teamController.update)
.delete(teamController.delete)
.all((_,res) =>{ res.sendStatus(405)});

teamRouter.route('/:id/addPlayer')
.patch(teamController.addPlayer)
.all((_,res) =>{ res.sendStatus(405)});

teamRouter.route('/:id/removePlayer')
.patch(teamController.delete)
.all((_,res) =>{ res.sendStatus(405)});


export default teamRouter;