import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-longest-word-finder',
  templateUrl: './longest-word-finder.component.html',
  styleUrls: ['./longest-word-finder.component.css']
})
export class LongestWordFinderComponent implements OnInit {
  ignoreSymbols: true | false = false;
  longestWord = '';
  regExp = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;

  constructor() { }

  ngOnInit(): void {}

  detectLargestWord(str) {
    let stringArray = str.split(' ');
    if (this.ignoreSymbols) {
      stringArray = stringArray.map((word) => {
        return word.replace(this.regExp, '');
      });
    }

    this.longestWord = stringArray[0];
    
    stringArray.forEach(function(word) {
        if (word.length > this.longestWord.length) {
          this.longestWord = word;
        }
    }, this);
  }
}
