export interface PlatformConfig {
  environment: string;
  version: string;
}

export function sharedTypes(): string {
  return 'shared-types';
}

// PF-017 dependency change test
