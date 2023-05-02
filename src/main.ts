import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Injector } from '@angular/core';
import { RaceService } from './app/ID/race.service';
import { ApiService } from './app/ID/api.service';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then(appRef => interactWithInjector(appRef.injector))
  .catch(err => console.error(err));


  function interactWithInjector(inj: Injector): void {
    console.log(inj.get(RaceService));
    console.log(inj.get(ApiService));

    }