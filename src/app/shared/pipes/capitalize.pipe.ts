import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

// There is already a built in pipe that does the same job
// This is just an example to document @memo usage
// Which memoizes the output of pure functions
@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {

  @memo()
  transform(value: string) {
    return (value || '').toUpperCase();
  }

}