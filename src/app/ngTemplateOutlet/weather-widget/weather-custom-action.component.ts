import { Component } from "@angular/core";
import { WeatherWidgetComponent } from "./weather-widget.component";




@Component({
    selector: 'app-weather-custom-action',
    template: '<button (click)="onClick">Reload & Copy</button>'
})
export class WeatherCustomActionComponent{

constructor(private weatherwidget: WeatherWidgetComponent){}

    onClick(){
        this.weatherwidget.actions.reload();
        this.weatherwidget.actions.copyData();
    }

}