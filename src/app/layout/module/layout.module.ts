import { NgModule }                         from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { BrowserModule }                    from '@angular/platform-browser'
import { BsDropdownModule }                 from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule }                   from 'ngx-owl-carousel-o';
import { NgxYoutubePlayerModule }           from 'ngx-youtube-player';


// ANGULAR COMPONENT
import { MainLayoutComponent }      from '../main-layout/main-layout.component'; 
import { HomepageComponent }        from '../homepage/homepage.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    BrowserModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  exports : [
    MainLayoutComponent,
    HomepageComponent
  ],
  declarations : [
    MainLayoutComponent,
    HomepageComponent
  ]
})
export class LayoutModule { }