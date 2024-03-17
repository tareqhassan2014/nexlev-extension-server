import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  @IsNotEmpty()
  public yt_channel_id: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsOptional()
  public location?: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsBoolean()
  @IsNotEmpty()
  public is_monetization_enabled: boolean;

  @IsString()
  @IsNotEmpty()
  public channel_category: string;

  @IsString()
  @IsNotEmpty()
  public playlist_id: string;

  @IsNumber()
  @IsNotEmpty()
  public video_count: number;

  @IsNumber()
  @IsNotEmpty()
  public rpm: number;

  @IsNumber()
  @IsNotEmpty()
  public total_revenue: number;

  @IsNumber()
  @IsNotEmpty()
  public avg_video_revenue: number;

  @IsNumber()
  @IsNotEmpty()
  public total_view_count: number;

  @IsNumber()
  @IsNotEmpty()
  public avg_view_count: number;
}

export class UpdateChannelDto {
  @IsString()
  @IsOptional()
  public yt_channel_id?: string;

  @IsString()
  @IsOptional()
  public title?: string;

  @IsString()
  @IsOptional()
  public location?: string;

  @IsString()
  @IsOptional()
  public description?: string;

  @IsString()
  @IsOptional()
  public username?: string;

  @IsBoolean()
  @IsOptional()
  public is_monetization_enabled?: boolean;

  @IsString()
  @IsOptional()
  public channel_category?: string;

  @IsString()
  @IsOptional()
  public playlist_id?: string;

  @IsNumber()
  @IsOptional()
  public video_count?: number;

  @IsNumber()
  @IsOptional()
  public rpm?: number;

  @IsNumber()
  @IsOptional()
  public total_revenue?: number;

  @IsNumber()
  @IsOptional()
  public avg_video_revenue?: number;

  @IsNumber()
  @IsOptional()
  public total_view_count?: number;

  @IsNumber()
  @IsOptional()
  public avg_view_count?: number;
}
