import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() isModalOpen!: boolean;
  @Output() toggled = new EventEmitter<boolean>();

  closeModal() {
    this.isModalOpen = false;
    console.log('Is modal open from modal: ', this.isModalOpen);
    this.toggled.emit(this.isModalOpen);
  }
}
