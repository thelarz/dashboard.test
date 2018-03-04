import { Component, OnInit } from '@angular/core';
import { HubService } from '../hub.service';
import { ShelfStat } from '../../shelfStat';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private hubService:HubService) { }

  public shelves = new Array<any>();

  ngOnInit() {
    this.hubService.messageCast.subscribe(msg => {
      if (msg.type === "shelf-stat") {
          
          var existing = this.shelves.filter((e) => {
            return e.device === msg.device;
          });

          

          if (existing && existing.length > 0){
            existing[0].date = msg.date;
            existing[0].capacity = msg.capacity;
            existing[0].packageDepth = msg.packageDepth;
            existing[0].onShelf = msg.onShelf;
            return;
          }

          var shelf = new ShelfStat();
          shelf.device = msg.device;
          shelf.date = msg.date;
          shelf.capacity = msg.capacity;
          shelf.packageDepth = msg.packageDepth;
          shelf.onShelf = msg.onShelf;
          this.shelves.push(shelf);

      }
    });
  }

}
