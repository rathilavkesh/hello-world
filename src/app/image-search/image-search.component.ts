import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  isMobileLayout: Boolean = false;

  constructor(private media: ObservableMedia) { }

  ngOnInit() {
    this.media.subscribe((change: MediaChange) => {
      this.isMobileLayout = change.mqAlias === 'xs' || change.mqAlias === 'sm';
    });
  }
}