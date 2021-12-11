import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeadersComponent } from './componentes/headers/headers.component';
import { NavComponent } from './componentes/nav/nav.component';
import { NovidadesComponent } from './componentes/novidades/novidades.component';
import { DownloadsComponent } from './componentes/downloads/downloads.component';
import { DadosComponent } from './componentes/dados/dados.component';
import { PodcastsComponent } from './componentes/podcasts/podcasts.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { PlayPodcastsComponent } from './componentes/play-podcasts/play-podcasts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeadersComponent,
    NavComponent,
    NovidadesComponent,
    DownloadsComponent,
    DadosComponent,
    PodcastsComponent,
    CursoComponent,
    PlayPodcastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
