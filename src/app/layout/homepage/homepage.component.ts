import { Component, OnInit }  from '@angular/core';
import { LayoutService }      from '../_service/layout.service';
import { Subscription }       from 'rxjs';
import { OwlOptions }         from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private subscriptions     : Subscription[] = [];
  public  generalData       : any;
  public  editorChoices     : any;
  public  articles          : any;
  private player            : any;
  private id                : string = 'qDuKsiwS5xw';

  public  customOptions             : OwlOptions = {
    loop        : false,
    mouseDrag   : true,
    touchDrag   : true,
    pullDrag    : false,
    dots        : true,
    navSpeed    : 700,
    nav         : false,
    navText     : ["", ""],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
    },
    margin      : 20,
  }

  public  trendingOptions             : OwlOptions = {
    loop        : false,
    mouseDrag   : true,
    touchDrag   : true,
    pullDrag    : false,
    dots        : true,
    navSpeed    : 700,
    nav         : false,
    navText     : ["", ""],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      540: {
        items: 3
      },
      740: {
        items: 5
      }
    },
    margin      : 20,
  }
  reviews                   : any;
  popularItems              = [
    {'image' : 'popular1.png', 'tagline' : 'Embrace The Curl', 'subtagline': 'May our curls pop and never stop'},
    {'image' : 'popular2.png', 'tagline' : 'Embrace The Curl', 'subtagline': 'May our curls pop and never stop'},
    {'image' : 'popular3.png', 'tagline' : 'Embrace The Curl', 'subtagline': 'May our curls pop and never stop'},
    {'image' : 'popular4.png', 'tagline' : 'Embrace The Curl', 'subtagline': 'May our curls pop and never stop'},
  ]
  trendingProducts          = [
    { 'image' : 'product1.png', 'name' : 'SKINCEUTICALS', 'subdesc' : 'C E Ferulic'},
    { 'image' : 'product2.png', 'name' : 'JUICE BEAUTY', 'subdesc' : 'Phto-Pigments Flawless '},
    { 'image' : 'product3.png', 'name' : 'SKINCEUTICALS', 'subdesc' : 'Pure Pressed Blush'},
    { 'image' : 'product1.png', 'name' : 'SKINCEUTICALS', 'subdesc' : 'C E Ferulic'},
    { 'image' : 'product2.png', 'name' : 'JUICE BEAUTY', 'subdesc' : 'Phto-Pigments Flawless '},
    { 'image' : 'product3.png', 'name' : 'SKINCEUTICALS', 'subdesc' : 'Pure Pressed Blush'},
    { 'image' : 'product4.png', 'name' : 'VAL BY VALERIE THOMAS', 'subdesc' : 'Pure Pressed Blush'},
    { 'image' : 'product1.png', 'name' : 'SKINCEUTICALS', 'subdesc' : 'C E Ferulic'},
    { 'image' : 'product2.png', 'name' : 'JUICE BEAUTY', 'subdesc' : 'Phto-Pigments Flawless '},
    { 'image' : 'product3.png', 'name' : 'SKINCEUTICALS', 'subdesc' : 'Pure Pressed Blush'},
  ]

  constructor(
    private Layout : LayoutService
  ) { }

  async ngOnInit(){
    try {
      this.generalData = await this.getGeneralData()
      console.log(this.generalData['latest review'])
      this.editorChoices  = this.generalData["editor's choice"]
      this.articles       = this.generalData['latest articles'] 
      this.reviews        = this.generalData['latest review']
    } catch(error) {
      alert(error)
    }
  }

  async ngOnDestroy() {
    this.subscriptions.forEach((each) => each.unsubscribe());
  }

  async getGeneralData() {
    return new Promise((resolve, reject) => {
      const subs = this.Layout
        .getGeneralDataServices() 
        .subscribe(data => {
          if(data != null) {
            resolve(data)
          } else {
            reject(new Error('error get general data'))
          }
        })
      this.subscriptions.push(subs);
    })
  }

  savePlayer(player : any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event : any) {
    console.log('player state', event.data);
  }

}
