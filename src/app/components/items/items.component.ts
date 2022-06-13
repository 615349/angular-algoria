import { Component, OnInit } from '@angular/core';
import { Hit, ApiResponse } from 'src/app/types';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  hits: Hit[] = [];

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.hits = items.hits;
    })
  }

}
