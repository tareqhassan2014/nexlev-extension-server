import { Channel } from '@/interfaces/channel.interface';
import mongoose, { Document, Schema } from 'mongoose';

const ChannelSchema: Schema = new Schema(
  {
    yt_channel_id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    channel_creation_date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    is_monetization_enabled: {
      type: Boolean,
      required: true,
    },
    channel_category: {
      type: String,
      required: true,
    },
    playlist_id: {
      type: String,
      required: true,
    },
    video_count: {
      type: Number,
      required: true,
    },
    rpm: {
      type: Number,
      required: true,
    },
    total_revenue: {
      type: Number,
      required: true,
    },
    avg_video_revenue: {
      type: Number,
      required: true,
    },
    total_view_count: {
      type: Number,
      required: true,
    },
    avg_view_count: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ChannelModel = mongoose.model<Channel & Document>('Channel', ChannelSchema);
