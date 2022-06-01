import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { RandomComponent } from './components/random/random.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent, pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'item', component: ItemComponent  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
