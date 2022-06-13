import { Component, OnInit, Input } from '@angular/core';
import { Hit } from 'src/app/types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() hit!: Hit;
  constructor() { }

  ngOnInit(): void {
  }

}
