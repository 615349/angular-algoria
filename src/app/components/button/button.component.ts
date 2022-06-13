import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string = 'Btn';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output() handleClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.handleClick.emit();
  }
}
