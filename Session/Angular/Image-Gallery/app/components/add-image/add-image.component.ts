import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IImage } from '../iimage';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  newImage: IImage = {imgaeId: 101, imageName: '' , imageDesc: '', imageCategory: '', imageSrc: ''};


  constructor() { }

  ngOnInit(): void {
  }

  addImage(form: NgForm): void {
    console.log(form);
    alert('Image Added' + this.newImage.imageName);
  }
}
