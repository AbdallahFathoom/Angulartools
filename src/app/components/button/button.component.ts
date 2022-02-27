import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() public text: string = 'text';
  @Input() public color: string = 'bg-youmi-purple';
  @Input() public textColor: string = 'text-youmi-white';
  @Input() public disabled: boolean = false;
  @Input() public small: boolean = false;
  @Input() public xSmall: boolean = false;
  @Input() public loader: boolean = false;
  @Input() public fullWidth: boolean = false;

  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onPress = (event: any) => this.onClick.emit(event);
}
