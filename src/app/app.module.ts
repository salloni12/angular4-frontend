import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatMenuModule, MatSidenavModule,MatToolbarModule,MatCardModule,MatFormFieldModule } from '@angular/material';


//import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';


const routes=[
  {path:'login',component:LoginComponent },
  {path:'singup',component:SingupComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent
 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule, MatMenuModule, MatSidenavModule,MatToolbarModule,MatCardModule,MatFormFieldModule
  ],
  providers: [//ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
