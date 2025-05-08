import 'primeicons/primeicons.css';

import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './app/services/config.service';

export function loadConfigFactory(configService: ConfigService) {
  return () => configService.loadConfig();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...appConfig.providers,
    importProvidersFrom(ConfigService),
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigFactory,
      deps: [ConfigService],
      multi: true
    }
  ]
}).catch(err => console.error(err));
