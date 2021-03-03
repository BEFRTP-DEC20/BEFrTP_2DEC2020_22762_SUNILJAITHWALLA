import { Component, OnDestroy, OnInit } from '@angular/core';
import { IImage } from '../iimage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

    constructor(){
         console.log('inside CONSTRUCTOR...');
    }
    parentCount = 0;



  search = '';
  today = new Date();

  images: IImage[] =  [{imgaeId: 101, imageName: 'Scenery', imageSrc: 'assets/images/waterfall.jpg', imageCategory: 'Nature', imageDesc: ' Beatiful Scenery of waterfall..'},
  {imgaeId: 102, imageName: 'Scripts', imageSrc: 'assets/images/script.jpg', imageCategory: 'LiteratureCategor' , imageDesc: ' Beatiful Scenery of waterfall..'},
  {imgaeId: 103, imageName: 'Saturn', imageSrc: 'assets/images/saturn.jpg', imageCategory: 'Universe' , imageDesc: ' Beatiful Scenery of waterfall..'},
  {imgaeId: 104, imageName: 'Island', imageSrc: 'assets/images/island.jpg', imageCategory: 'Island' , imageDesc: ' Beatiful Scenery of waterfall..'},
  // tslint:disable-next-line:max-line-length
  {imgaeId: 105, imageName: 'Trees', imageSrc: '/assets/images/tree.jpg', imageCategory: 'Nature',  imageDesc: ' Beatiful Scenery of waterfall..'} ,
  {imgaeId: 106, imageName: 'Rainfall', imageSrc: '', imageCategory: 'Nature', imageDesc: ''}];


  toggleImage = () => {
       alert('Clicked');
  }

  ngOnInit(): void {
    console.log('inside init...');
  }

  ngOnDestroy(): void {
    console.log('inside destroy...');
}

getCount(event: number): void {
  this.parentCount = event;
}

}
