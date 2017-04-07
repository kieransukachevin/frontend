import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { HomeComponent, SubmitComponent, DoneComponent, AdminComponent, AdminCreateComponent, AdminEditComponent, AdminReviewComponent, AdminReviewApplicationComponent } from './routes/routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'submit/:formID',
        component: SubmitComponent
      },
      {
        path: 'done/:formID',
        component: DoneComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'admin/create',
        component: AdminCreateComponent
      },
      {
        path: 'admin/edit/:ID',
        component: AdminEditComponent
      },
      {
        path: 'admin/review/:formID',
        component: AdminReviewComponent
      },
      {
        path: 'admin/review/:formID/:username',
        component: AdminReviewApplicationComponent
      },
    ]),
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitComponent,
    DoneComponent,
    AdminComponent,
    AdminCreateComponent,
    AdminEditComponent,
    AdminReviewComponent,
    AdminReviewApplicationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
