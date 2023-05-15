import { Component } from '@angular/core';

@Component({
  selector: 'app-playkudo',
  templateUrl: './playkudo.component.html',
  styleUrls: ['./playkudo.component.scss']
})
export class PlaykudoComponent {
  spindata: any;
  ngOnInit() {
    this.spindata = ELEMENT_DATA
  }
  showpic = true;
  win = true;
  show() {
    this.showpic = false
    this.win = true
  }
  winopen() {
    this.win = false
  }
  back() {
    this.win = true
  }
}

export interface PeriodicElement {
  name: string;
  image: string;
  text: string;
  textp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Ruang Seni', image: '../assets/p1.png', text: 'choose spinner', textp: '' },
  { name: 'Karla Svensson', image: '../assets/p2.png', text: 'choose spinner', textp: '' },
  { name: 'Anip Safiya', image: '../assets/p3.png', text: 'choose spinner', textp: '' },
  { name: 'Johne Doe', image: '../assets/p4.png', text: 'choose spinner', textp: '' },
  { name: 'Ruang Seni', image: '../assets/p1.png', text: 'choose spinner', textp: '' },
  { name: 'Karla Svensson', image: '../assets/p2.png', text: 'choose spinner', textp: '' },
  { name: 'Anip Safiya', image: '../assets/p3.png', text: 'choose spinner', textp: '' },
  { name: 'Johne Doe', image: '../assets/p4.png', text: 'choose spinner', textp: '' },
  { name: '', image: '', text: '', textp: '' },

];
