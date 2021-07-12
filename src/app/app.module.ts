import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from "@angular/forms";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NoteComponent } from './note/note.component';
import { DownComponent } from './down/down.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    DownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
