import Pet from '../models/pet.model';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pets-view',
  templateUrl: './pets-view.component.html',
  styleUrls: ['./pets-view.component.less']
})
export class PetsViewComponent implements OnInit {

  isToggle = false;
  @Input() pet: Pet;
  @Input() toggleCat: boolean;
  ngOnInit(): void {
  }


  toggleInfo() {
    this.isToggle = !this.isToggle;
  }

  @Output() onChanged = new EventEmitter<boolean>();
  notification(increased: any) {
    this.onChanged.emit(increased)
  }
}
