import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisableButtonDirective } from './directives/disable-button.directive';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HoverHighlightDirective } from './directives/hoverhighlight.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { CardComponent } from './ngcontent/card/card.component';
import { CardsComponent } from './ngcontent/cards/cards.component';
import { DirectivesComponent } from './directives/directives/directives.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HighlightDirective,
    DisableButtonDirective,
    CustomButtonComponent,
    HoverHighlightDirective,
    EmailValidatorDirective,
    CardComponent,
    CardsComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
