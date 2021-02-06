import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpTitlePipe } from './emplist/empTitle.pipe';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpcountComponent } from './empcount/empcount.component';
import { SimpleComponent } from './simple/simple.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
// import { EmpService } from './emplist/emp.service';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'emplist', component: EmplistComponent},
  {path: 'empdetail/:code', component: EmpdetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpTitlePipe,
    EmplistComponent,
    EmpcountComponent,
    SimpleComponent,
    HomeComponent,
    PagenotfoundComponent,
    EmpdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
