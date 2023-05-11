import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DisableButtonDirective } from './directives/disable-button.directive';
import { CustomButtonComponent } from './directives/custom-button/custom-button.component';
import { HoverHighlightDirective } from './directives/hoverhighlight.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { CardComponent } from './ngcontent/card/card.component';
import { CardsComponent } from './ngcontent/cards/cards.component';
import { DirectivesComponent } from './directives/directives/directives.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { InjectionDependencyComponent } from './ID/injection-dependency/injection-dependency.component';
import { RaceService } from './ID/race.service';
import { ApiService } from './ID/api.service';
import { HighlightModule } from './highlight/highlight.module';
import { TestsModule } from './tests/tests.module';
import { DoctorService } from './tests/intermediate2/doctor/doctor.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DisableButtonDirective,
    CustomButtonComponent,
    HoverHighlightDirective,
    EmailValidatorDirective,
    CardComponent,
    CardsComponent,
    DirectivesComponent,
    ViewChildComponent,
    InjectionDependencyComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    TestsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RaceService, useClass: RaceService },
    { provide: ApiService, useClass: ApiService },
    { provide: ApiService, useClass: ApiService },
    { provide: 'IS_PROD', useValue: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
