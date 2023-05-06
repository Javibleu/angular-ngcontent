import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimationsComponent } from "./animations.component";
import { OpenCloseComponent } from "./open-close/open-close.component";
import { HomeComponent } from "./home/home.component";
import { StatusSliderComponent } from "./status-slider/status-slider.component";
import { EnterLeaveComponent } from "./enter-leave/enter-leave.component";
import { AutoCalculationComponent } from "./auto-calculation/auto-calculation.component";
import { FilterComponent } from "./filter/filter.component";
import { GroupComponent } from "./group/group.component";
import { InsertRemoveComponent } from "./insert-remove/insert-remove.component";
import { QueryingComponent } from "./querying/querying.component";


const routes: Routes = [
  {
    path: '', component: AnimationsComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'open-close', component: OpenCloseComponent },
      { path: 'status', component: StatusSliderComponent },
      { path: 'enter-leave', component: EnterLeaveComponent },
      { path: 'auto', component: AutoCalculationComponent },
      { path: 'heroes', component: FilterComponent },
      { path: 'hero-groups', component: GroupComponent },
      { path: 'insert-remove', component: InsertRemoveComponent },
      { path: 'querying', component: QueryingComponent },
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }