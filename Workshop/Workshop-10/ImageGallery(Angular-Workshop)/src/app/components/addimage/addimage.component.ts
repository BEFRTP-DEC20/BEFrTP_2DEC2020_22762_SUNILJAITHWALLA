import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Iimage } from '../iimage';
import { ImageservService } from '../../utility/imageserv.service';
@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.scss']
})
export class AddimageComponent implements OnInit {
  images:Iimage[];
  newImage: Iimage = {imageid: 101, imageName:' ',imageSrc:' ',imageCategory:' ',imageDesc:' '}

  constructor(private _imgServ: ImageservService) {this.images = this._imgServ.images; }

  ngOnInit(): void {
  }
  addImage(form :NgForm):void{
    console.log(form);
    this.newImage.imageid=this.images[this.images,length-1].imageid
    alert('Image added'+this.newImage.imageName);
    this.images.push(this.newImage);


  }

}
