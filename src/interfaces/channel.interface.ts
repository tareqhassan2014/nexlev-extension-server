export interface Channel {
  yt_channel_id: string;
  title: string;
  channel_creation_date: Date;
  location?: string;
  created_at: Date;
  updated_at: Date;
  description: string;
  username: string;
  is_monetization_enabled: boolean;
  channel_category: string;
  playlist_id: string;
  video_count: number;
  rpm: number;
  total_revenue: number;
  avg_video_revenue: number;
  total_view_count: number;
  avg_view_count: number;
}
