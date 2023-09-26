import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() animes: any[] = [];
  limit: number = 3
  loading = false;

  loadMore() {
    this.loading = true;
    setTimeout(() => {
      this.limit = this.animes.length
      this.loading = false;
    }, 1000)
  }
}
