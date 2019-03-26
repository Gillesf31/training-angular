import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the', 'le', 'de', 'du', 'les', 'des', 'et', 'ou'];
    return prepositions.includes(word.toLowerCase())
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLocaleLowerCase();
  }

  transform(value: string): any {
    if (!value) {
      return null;
    }
    const words = value.split(' ');

    // Each elements
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (this.isPreposition(word) && i > 0) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }
    // 1st element

    return words.join(' ');
  }

}
