import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent  implements OnInit {
  @Input() text!: String;
  @Input() color!: String;
  @Input() expand!: String;
  @Input() shape!: String;
  @Input() size!: String;
  @Input() fill!: String;


  constructor() { }

  ngOnInit() {}

}
