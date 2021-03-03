import { Injectable } from '@angular/core';
import { Iimage } from '../components/iimage';
@Injectable({
  providedIn: 'root'
})
export class ImageservService {
  images : Iimage[]=
  [
      {imageid: 101 , imageName: 'Scenery' , imageSrc: 'assets/images/nature.jpg' , imageCategory: 'Nature' , imageDesc: 'Beautifull Scenery'},
      {imageid: 102 , imageName: 'Scripts' , imageSrc: 'assets/images/script.jpg' , imageCategory: 'Literature' , imageDesc:'Beautiful Scripts of literature'},
      {imageid: 103 , imageName: 'Saturn' , imageSrc: 'assets/images/saturn.jpg' , imageCategory: 'Universe' , imageDesc:'Saturn in a Universe'},
      {imageid: 104 , imageName: 'Island' , imageSrc: 'assets/images/island.jfif' , imageCategory: 'Island'  , imageDesc:'A Beautiful Isalnd'},
      {imageid: 105 , imageName: 'Trees' , imageSrc: 'assets/images/tress.jpg' , imageCategory: 'Nature'  , imageDesc: 'Beautifull Scenery'}
  ]
  

  constructor() {
    
   }
}
