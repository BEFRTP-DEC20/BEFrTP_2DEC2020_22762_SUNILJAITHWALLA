import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(images: any[], searchText: string): any[] {
   
    // return empty array if array is falsy
    if (!images) { return []; }
   
    // return the original array if search text is empty
    if (!searchText) { return images; }
   
    // convert the searchText to lower case
    searchText = searchText.toLowerCase();
   
    // retrun the filtered array
    return images.filter(image => {
     
        return image['imageCategory'].toLowerCase().includes(searchText);
      
     
    });
   }
   
}
