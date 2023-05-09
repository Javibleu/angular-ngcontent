import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgTemplateOutletComponent } from "./ng-template-outlet.component";
import { ProgressBarParentComponent } from "./progress-bar/progress-bar-parent.component";
import { HomeComponent } from "./home/home.component";
import { WeatherWidgetParentComponent } from "./weather-widget/weather-widget-parent.component";


const routes: Routes = [
    { path: '', component: NgTemplateOutletComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'weather-widget' },
            {path: 'home', component: HomeComponent},
            {path: 'progress-bar', component: ProgressBarParentComponent},
            {path: 'weather-widget', component: WeatherWidgetParentComponent}
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgTemplateOutletRoutingModule { }


