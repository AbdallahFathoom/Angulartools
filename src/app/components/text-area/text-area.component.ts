import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  // declaring the label
  @Input() label: string = 'Text';
  //  form group name
  @Input()
  FGN!: FormGroup;
  // from control name
  @Input()
  FCN!: string;

  @Input() infinite: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
