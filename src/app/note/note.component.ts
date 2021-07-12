import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { StorageService } from "../service/storage.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() value: string;
  @Output() changeValue = new EventEmitter();

  constructor(private storageService: StorageService) {
    this.value = '';
  }

  ngOnInit(): void {
    const value = this.storageService.getItem('notedown');
    if (value) {
      this.value = value;
      this.changeValue.emit(value);
    }
  }

  onNgModelChange(event: Event): void {
    this.storageService.setItem('notedown', event);
    this.changeValue.emit(event);
  }
}