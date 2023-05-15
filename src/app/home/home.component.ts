import { Component } from '@angular/core';
import { Dropdown, Ripple, Select, initTE, Modal } from "tw-elements";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sidebardata: any;
  ngOnInit() {
    this.sidebardata = ELEMENT_DATA
    initTE({ Dropdown, Modal, Ripple, Select });
    const arrowBtn = document.getElementById('arrow-btn');
    arrowBtn!.addEventListener('click', () => {
      arrowBtn!.classList.toggle('rotate-180');
    });

  }

  menuState = 1
  open_close(any: string) {
    let div1 = document.getElementById("mySidebar");
    let div2 = document.getElementById("mySidebar2");
    let div3 = document.getElementById("mySidebar3");
    let div4 = document.getElementById("mySidebar4");
    let div5 = document.getElementById("mySidebar5");
    let div6 = document.getElementById("mySidebar6");
    let div7 = document.getElementById("mySidebar7");
    let div8 = document.getElementById("mySidebar8");
    let res;
    switch (any) {
      case 'first':
        res = div1!.style.display = "block";
        div2!.style.display = "none";
        div3!.style.display = "none";
        div4!.style.display = "none";
        div5!.style.display = "none";
        div6!.style.display = "none";
        div7!.style.display = "none";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0";
          document.getElementById("main")!.style.marginLeft = "0";
        }
        break
      case 'second':
        res = div1!.style.display = "none";
        div2!.style.display = "block";
        div3!.style.display = "none";
        div4!.style.display = "none";
        div5!.style.display = "none";
        div6!.style.display = "none";
        div7!.style.display = "none";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar2")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar2")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
      case 'third':
        res = div1!.style.display = "none";
        div2!.style.display = "none";
        div3!.style.display = "block";
        div4!.style.display = "none";
        div5!.style.display = "none";
        div6!.style.display = "none";
        div7!.style.display = "none";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar3")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar3")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
      case 'four':
        res = div1!.style.display = "none";
        div2!.style.display = "none";
        div3!.style.display = "none";
        div4!.style.display = "block";
        div5!.style.display = "none";
        div6!.style.display = "none";
        div7!.style.display = "none";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar4")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar4")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
      case 'five':
        res = div1!.style.display = "none";
        div2!.style.display = "none";
        div3!.style.display = "none";
        div4!.style.display = "none";
        div5!.style.display = "block";
        div6!.style.display = "none";
        div7!.style.display = "none";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar5")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar5")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
      case 'six':
        res = div1!.style.display = "none";
        div2!.style.display = "none";
        div3!.style.display = "none";
        div4!.style.display = "none";
        div5!.style.display = "none";
        div6!.style.display = "block";
        div7!.style.display = "none";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar6")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar6")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
      case 'seven':
        res = div1!.style.display = "none";
        div2!.style.display = "none";
        div3!.style.display = "none";
        div4!.style.display = "none";
        div5!.style.display = "none";
        div6!.style.display = "none";
        div7!.style.display = "block";
        div8!.style.display = "none";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar7")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar7")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
      case 'eight':
        res = div1!.style.display = "none";
        div2!.style.display = "none";
        div3!.style.display = "none";
        div4!.style.display = "none";
        div5!.style.display = "none";
        div6!.style.display = "none";
        div7!.style.display = "none";
        div8!.style.display = "block";
        if (this.menuState === 0) {
          this.menuState = 1;
          document.getElementById("mySidebar8")!.style.width = "325px";
          document.getElementById("main")!.style.marginRight = "300px";
          document.getElementById("main")!.style.marginLeft = "-300px";
        }
        else {
          this.menuState = 0;
          document.getElementById("mySidebar8")!.style.width = "0";
          document.getElementById("main")!.style.marginRight = "0px";
          document.getElementById("main")!.style.marginLeft = "0px";
        }
        break
    }
  }
  mybtn = true;
  btn1() {
    this.mybtn = false
  }
  btn11() {
    this.mybtn = true
  }
  mybtn2 = true;
  btn2() {
    this.mybtn2 = false
  }
  btn22() {
    this.mybtn2 = true
  }
  selectbox = true
  showHidePan() {
    let checkbox = document.getElementById('check');
    let pan_input = document.getElementById('card1check');
    let div1 = document.getElementById("mySidebar");
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)";
      pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan2() {
    let checkbox = document.getElementById('check2');
    let pan_input = document.getElementById('card2check');
    let div1 = document.getElementById("mySidebar");
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan3() {
    let checkbox = document.getElementById('check3');
    let pan_input = document.getElementById('card3check');
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan4() {
    let checkbox = document.getElementById('check4');
    let pan_input = document.getElementById('card4check');
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan5() {
    let checkbox = document.getElementById('check5');
    let pan_input = document.getElementById('card5check');
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan6() {
    let checkbox = document.getElementById('check6');
    let pan_input = document.getElementById('card6check');
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan7() {
    let checkbox = document.getElementById('check7');
    let pan_input = document.getElementById('card7check');
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  showHidePan8() {
    let checkbox = document.getElementById('check8');
    let pan_input = document.getElementById('card8check');
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      console.log("unchecked")
    } else {
      pan_input!.style.background = "rgb(104 150 207)"; pan_input!.style.padding = "0.5rem 0.75rem";
      this.selectbox = false
    }
  }
  closebtn() {
    let pan_input = document.getElementById('card1check');
    let pan_input2 = document.getElementById('card2check');
    let pan_input3 = document.getElementById('card3check');
    let pan_input4 = document.getElementById('card4check');
    let pan_input5 = document.getElementById('card5check');
    let pan_input6 = document.getElementById('card6check');
    let pan_input7 = document.getElementById('card7check');
    let pan_input8 = document.getElementById('card8check');
    pan_input!.style.background = "transparent";
    pan_input2!.style.background = "transparent";
    pan_input3!.style.background = "transparent";
    pan_input4!.style.background = "transparent";
    pan_input5!.style.background = "transparent";
    pan_input6!.style.background = "transparent";
    pan_input7!.style.background = "transparent";
    pan_input8!.style.background = "transparent";
    pan_input!.style.padding = "0rem";
    pan_input2!.style.padding = "0rem";
    pan_input3!.style.padding = "0rem";
    pan_input4!.style.padding = "0rem";
    pan_input5!.style.padding = "0rem";
    pan_input6!.style.padding = "0rem";
    pan_input7!.style.padding = "0rem";
    pan_input8!.style.padding = "0rem";
    this.selectbox = true

  }

}


export interface PeriodicElement {
  name: string;
  image1: string;
  image2: string;
  text: string;
  color1: string;
  color2: string;
  id: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 'mySidebar2',
    name: 'Congratulations', image1: '../assets/card/card1pic2.png',
    image2: '../assets/card/card1pic.png', text: 'on 21st December,2020', color1: 'bg-C2', color2: 'bg-C2a'
  },
  {
    id: 'mySidebar3',
    name: 'Proud', image1: '../assets/card/tlogo3.png',
    image2: '../assets/card/blogo3.png', text: 'on 21st December,2020', color1: 'bg-C3', color2: 'bg-C3a'
  },
  {
    id: 'mySidebar4',
    name: 'Great Job', image1: '../assets/card/tlogo4.png',
    image2: '../assets/card/blogo4.png', text: 'on 21st December,2020', color1: 'bg-C4', color2: 'bg-C4a'
  },
  {
    id: 'mySidebar5',
    name: 'Well Done', image1: '../assets/card/tlogo5.png',
    image2: '../assets/card/blogo5.png', text: 'on 21st December,2020', color1: 'bg-C5', color2: 'bg-C5a'
  },
  {
    id: 'mySidebar6',
    name: 'Very Thanks', image1: '../assets/card/tlogo6.png',
    image2: '../assets/card/blogo6.png', text: 'on 21st December,2020', color1: 'bg-C6', color2: 'bg-C6a'
  },
  {
    id: 'mySidebar7',
    name: 'Very Happy', image1: '../assets/card/blogo4.png',
    image2: '../assets/card/blogo7.png', text: 'on 21st December,2020', color1: 'bg-C7', color2: 'bg-C7a'
  },
  {
    id: 'mySidebar8',
    name: 'Many Thanks', image1: '../assets/card/tlogo8.png',
    image2: '../assets/card/blogo8.png', text: 'on 21st December,2020', color1: 'bg-C8', color2: 'bg-C8a'
  }
];
