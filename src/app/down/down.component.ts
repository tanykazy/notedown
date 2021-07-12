import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { MarkdownService } from "../service/markdown.service";

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.css']
})
export class DownComponent implements OnInit, OnChanges {
  @Input() text: string;
  html: string;

  constructor(private markdown: MarkdownService) {
    this.text = '';
    this.html = '';
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const text = changes.text.currentValue;
    const result = this.markdown.markdown2html(text);
    this.html = result;
  }
}