import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  content = 'Click to see a picture of a cat!';
  showDefault = true;
  fontColor = 'blue';

  items = ['Components', 'Templates', 'Directives', "What's next?"];

  swapDisplay() {
    this.showDefault = !this.showDefault;
  }

  pointer(hoverName: any) {
    hoverName.style.cursor = 'pointer';
  }


  showElement: boolean = false;
}
