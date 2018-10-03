import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: string[]

  constructor() { }

  ngOnInit() {
    this.tasks = ['Generic']
  }

  addTask(input){
    this.tasks.push(input)
  }

  removeTask(input){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i] === input){
        this.tasks.splice(i,1)
      }
    }
  }

}
