import { Channel } from '@interfaces/channel.interface';
import { ChannelService } from '@services/channel.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class ChannelController {
  public channelService = Container.get(ChannelService);

  public getChannels = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allChannels: Channel[] = await this.channelService.findAllChannels();
      res.status(200).json({ data: allChannels, message: 'All channels retrieved successfully' });
    } catch (error) {
      next(error);
    }
  };

  public getChannelById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelId: string = req.params.id;
      const channel: Channel = await this.channelService.findChannelById(channelId);
      res.status(200).json({ data: channel, message: 'Channel retrieved successfully' });
    } catch (error) {
      next(error);
    }
  };

  public createChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newChannelData: Channel = req.body;
      const createdChannel: Channel = await this.channelService.createChannel(newChannelData);
      res.status(201).json({ data: createdChannel, message: 'Channel created successfully' });
    } catch (error) {
      next(error);
    }
  };

  public updateChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelId: string = req.params.id;
      const updatedChannelData: Channel = req.body;
      const updatedChannel: Channel = await this.channelService.updateChannel(channelId, updatedChannelData);
      res.status(200).json({ data: updatedChannel, message: 'Channel updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelId: string = req.params.id;
      const deletedChannel: Channel = await this.channelService.deleteChannel(channelId);
      res.status(200).json({ data: deletedChannel, message: 'Channel deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
