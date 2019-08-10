import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { EmpTitlePipe } from './emplist/empTitle.pipe';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpcountComponent } from './empcount/empcount.component';
import { SimpleComponent } from './simple/simple.component';
// import { EmpService } from './emplist/emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpTitlePipe,
    EmplistComponent,
    EmpcountComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
