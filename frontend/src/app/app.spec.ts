import { App } from './app';

describe('App', () => {
  it('should load shared platform configuration', () => {
    const app = new App();

    expect(app['config']).toEqual({
      environment: 'development',
      version: '1.0.0',
    });
  });
});
