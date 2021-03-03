import { Component, OnInit } from '@angular/core';
import { Iimage } from '../iimage';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-editimage',
  templateUrl: './editimage.component.html',
  styleUrls: ['./editimage.component.scss']
})
export class EditimageComponent implements OnInit {
  newImage: Iimage = {imageid: 101, imageName:' ',imageSrc:' ',imageCategory:' ',imageDesc:' '}


  constructor() { }

  ngOnInit(): void {
  }
  
}
