import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HandComponent } from './hand/hand.component';

import { BotHandService } from './shared/services/bot-hand.service';
import { RankService } from './shared/services/rank.service';

import { RadioButtonModule } from 'primeng/primeng';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HandComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RadioButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BotHandService,
    RankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
