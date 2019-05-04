import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'highlighterApp';
  selectedText: string = '';
    
  
  showSelectedText(oField) {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
         } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
      
      
        
    }
    this.selectedText = text;
  }
  highlightText(){
   // text.style().color = "#ff0000";
  }
}
