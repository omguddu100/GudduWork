import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findlist'
})
export class FindlistPipe implements PipeTransform {

  
  transform(items: any[], term: string): any {

    return items.filter(item => item.Status.indexOf(term) !== -1);
  }

}
