import { Component, Input } from '@angular/core';
import { Node } from '../../Utilities/node.model';

@Component({
  selector: 'app-singly-linked-list',
  standalone: false,
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']

})
export class SinglyLinkedListComponent {

  @Input('userInputReal') userInput: number = 0;
  userInputReal: string = '';
  nuumber: number = 2;
  nodes: Node[] = [];

  addNodes(data: number ): void {
    this.nodes.push({ id: 1, value: 'A', x: 100, y: 100 });
  }

  add(value: string) {
    this.nuumber = parseInt(value, 10) + 1;
  }

  prepend(): void {

  }

  append(): void {

  }

  insertAtPosition(): void {

  }

  deleteAtPosition(): void {

  }
}
