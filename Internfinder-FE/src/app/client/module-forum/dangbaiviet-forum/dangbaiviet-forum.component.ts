import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangbaiviet-forum',
  templateUrl: './dangbaiviet-forum.component.html',
  styleUrls: ['./dangbaiviet-forum.component.css']
})
export class DangbaivietForumComponent implements OnInit {

  constructor() { }
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  ngOnInit(): void {
  }

}
