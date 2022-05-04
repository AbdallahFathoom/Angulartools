import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = 'text';
  // these classes names are in tailwind configuration file
  @Input() public color: string = 'bg-purple';
  @Input() public textColor: string = 'primary-white';
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
