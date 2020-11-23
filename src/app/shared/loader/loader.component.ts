import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() options: {
    timeout: number;
    isFullscreen: boolean;
    isRelative: boolean;
  } | undefined;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onTimeout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const oOptions = this.options || {timeout: 100, isFullscreen: false};
    setTimeout(() => this.onTimeout.emit(), oOptions.timeout);
  }

}
