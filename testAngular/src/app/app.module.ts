import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompoComponent } from './newcompo/newcompo.component';
import { ImportclassComponent } from './importclass/importclass.component';
import { TestComponent } from './test/test.component';
import { TestngforComponent } from './testngfor/testngfor.component';
import { FriendsService } from './friends.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NewcompoComponent,
    ImportclassComponent,
    TestComponent,
    TestngforComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
