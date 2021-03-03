import { Component, OnDestroy, OnInit  } from '@angular/core';
import { ImageservService } from '../../utility/imageserv.service';
import { Iimage } from '../iimage';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy {
  constructor( private _imgServ: ImageservService)
  {
    console.log('inside constructor');
  }
  parentCount = 0
  ngOnDestroy(): void{console.log('inside destroy...');

  }
  search = '';
 today =new Date();
  images : Iimage[]=
  [
      {imageid: 101 , imageName: 'Scenery' , imageSrc: 'assets/images/nature.jpg' , imageCategory: 'Nature' , imageDesc: 'Beautifull Scenery'},
      {imageid: 102 , imageName: 'Scripts' , imageSrc: 'assets/images/script.jpg' , imageCategory: 'Literature' , imageDesc:'Beautiful Scripts of literature'},
      {imageid: 103 , imageName: 'Saturn' , imageSrc: 'assets/images/saturn.jpg' , imageCategory: 'Universe' , imageDesc:'Saturn in a Universe'},
      {imageid: 104 , imageName: 'Island' , imageSrc: 'assets/images/island.jfif' , imageCategory: 'Island'  , imageDesc:'A Beautiful Isalnd'},
      {imageid: 105 , imageName: 'Trees' , imageSrc: 'assets/images/tress.jpg' , imageCategory: 'Nature'  , imageDesc: 'Beautifull Scenery'}
  ]
 
  toggleImage(){
    alert(' clicked' );
  }
 
  ngOnInit(): void {console.log('inside init...');
  }
  getCount(event: number) : void
  {
this.parentCount= event;
  }

}
