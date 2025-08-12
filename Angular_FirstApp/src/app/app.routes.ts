import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';



export const routes: Routes = [
  { path:'update/:id', component: UpdateComponent },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
];