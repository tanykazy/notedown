import { Injectable } from '@angular/core';

import { Parser, HtmlRenderer } from 'commonmark';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private reader: Parser;
  private writer: HtmlRenderer;

  constructor() {
    this.reader = new Parser();
    this.writer = new HtmlRenderer();
  }

  public markdown2html(markdown: string): string {
    const parsed = this.reader.parse(markdown);
    const result = this.writer.render(parsed);
    return result;
  }
}
