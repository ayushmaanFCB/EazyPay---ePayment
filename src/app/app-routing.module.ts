import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsMediaComponent } from './news-media/news-media.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'news-media', component: NewsMediaComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
