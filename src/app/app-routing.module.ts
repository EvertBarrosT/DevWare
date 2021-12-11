import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './componentes/curso/curso.component';
import { DadosComponent } from './componentes/dados/dados.component';
import { DownloadsComponent } from './componentes/downloads/downloads.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NovidadesComponent } from './componentes/novidades/novidades.component';
import { PlayPodcastsComponent } from './componentes/play-podcasts/play-podcasts.component';
import { PodcastsComponent } from './componentes/podcasts/podcasts.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nov', component: NovidadesComponent},
  {path: 'down', component: DownloadsComponent},
  {path: 'dados', component: DadosComponent},
  {path: 'pod', component: PodcastsComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'playPodcast', component: PlayPodcastsComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
