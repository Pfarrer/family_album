import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GalleryComponent } from './gallery/gallery.component';
import { TimelineComponent } from './timeline/timeline.component';
import {HttpClientModule} from "@angular/common/http";
import { DaySectionComponent } from './timeline/day-section/day-section.component';
import { MediaPresenterComponent } from './media-presenter/media-presenter.component';
import {MediaPresenterService} from "./media-presenter/media-presenter.service";
import { NavbarComponent } from './navbar/navbar.component';
import { KeysPipe } from './keys.pipe';
import { FlashbackComponent } from './flashback/flashback.component';
import { PeopleComponent } from './people/people.component';
import { GeoComponent } from './geo/geo.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    TimelineComponent,
    DaySectionComponent,
    MediaPresenterComponent,
    NavbarComponent,
    KeysPipe,
    FlashbackComponent,
    PeopleComponent,
    GeoComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [MediaPresenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }