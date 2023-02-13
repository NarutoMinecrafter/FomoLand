import { config } from 'dotenv';

config();

export class AppConfig {
  private static readonly env = process.env;

  static get port(): number {
    return parseInt(this.env.PORT || '5000', 10);
  }

  static get traitsniperApiUrl(): string {
    return (
      AppConfig.env.TRAITSNIPER_API_URL || 'https://api.traitsniper.com/v1/'
    );
  }

  static get traitsniperApiKey(): string {
    return AppConfig.env.TRAITSNIPER_API_KEY;
  }
}
