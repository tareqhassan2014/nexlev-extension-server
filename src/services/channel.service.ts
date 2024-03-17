import { HttpException } from '@exceptions/httpException';
import { Channel } from '@interfaces/channel.interface';
import { ChannelModel } from '@models/channel.model';
import { Service } from 'typedi';

@Service()
export class ChannelService {
  public async findAllChannels(): Promise<Channel[]> {
    const channels: Channel[] = await ChannelModel.find();
    return channels;
  }

  public async findChannelById(channelId: string): Promise<Channel> {
    const channel: Channel = await ChannelModel.findOne({ yt_channel_id: channelId });
    if (!channel) throw new HttpException(404, 'Channel not found');

    return channel;
  }

  public async createChannel(channelData: Channel): Promise<Channel> {
    const existingChannel: Channel = await ChannelModel.findOne({ yt_channel_id: channelData.yt_channel_id });
    if (existingChannel) {
      throw new HttpException(409, `Channel with ID ${channelData.yt_channel_id} already exists`);
    }

    const createdChannel: Channel = await ChannelModel.create(channelData);
    return createdChannel;
  }

  public async updateChannel(channelId: string, channelData: Channel): Promise<Channel> {
    const existingChannel: Channel = await ChannelModel.findOne({ yt_channel_id: channelId });
    if (!existingChannel) {
      throw new HttpException(404, 'Channel not found');
    }

    // Update only specified fields
    const updatedChannel: Channel = await ChannelModel.findOneAndUpdate({ yt_channel_id: channelId }, channelData, { new: true });
    return updatedChannel;
  }

  public async deleteChannel(channelId: string): Promise<Channel> {
    const deletedChannel: Channel = await ChannelModel.findOneAndDelete({ yt_channel_id: channelId });
    if (!deletedChannel) {
      throw new HttpException(404, 'Channel not found');
    }

    return deletedChannel;
  }
}
