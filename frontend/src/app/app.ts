import { PlatformConfig } from '@platformforge-platform/shared-types';

export class App {
  protected title = 'frontend';

  protected config: PlatformConfig = {
    environment: 'development',
    version: '1.0.0',
  };
}
