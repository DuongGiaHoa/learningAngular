import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() selected = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {}
}
