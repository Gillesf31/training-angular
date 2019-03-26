import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'summary'})
export class CoursePipe implements PipeTransform {
    constructor() { }

    transform(value: string, limit?: number): string {
        if (!value) {
            return null;
        } else {
            let actualLimit = (limit) ? limit : 50;
            return value.substr(0, actualLimit) + '... ';
        }
    }
}