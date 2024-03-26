import { ChannelController } from '@controllers/channel.controller';
import { CreateChannelDto } from '@dtos/channel.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { Router } from 'express';

export class ChannelRoute implements Routes {
  public path = '/channels';
  public router = Router();
  public channelController = new ChannelController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.channelController.getChannels);
    this.router.get(`${this.path}/:id`, this.channelController.getChannelById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateChannelDto), this.channelController.createChannel);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateChannelDto, true), this.channelController.updateChannel);
    this.router.delete(`${this.path}/:id`, this.channelController.deleteChannel);
    this.router.post(`${this.path}/many`, ValidationMiddleware(CreateChannelDto, true), this.channelController.createChannels);
  }
}
