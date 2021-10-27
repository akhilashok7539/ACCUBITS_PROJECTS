import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], filterText: string): any[] {

    if (!items) return []; 
    if (!filterText) return items;
    filterText = filterText.toLowerCase();
    return items.filter(it => {
      /* search currency */
      if (it.countryName !== undefined) {
        return it.countryName.toLowerCase().includes(filterText);
      }
       /* search state */
       if (it.stateName !== undefined) {
        return it.stateName.toLowerCase().includes(filterText);
      }
       /* search city */
       if (it.cityName !== undefined) {
        return it.cityName.toLowerCase().includes(filterText);
      }
      else if (it.name !== undefined) {
        return it.name.toLowerCase().includes(filterText);
      }
      /* Add different fields also */
      else if (it.lastName !== undefined) {
        return it.lastName.toLowerCase().includes(filterText);
      }
    });

  }
}