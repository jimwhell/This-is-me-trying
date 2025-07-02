import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css'],
})
export class CreatePostFormComponent {
  isModalOpen: boolean = false;

  toggleModal() {
    console.log('Is modal open from create post form: ', this.isModalOpen);
    if (this.isModalOpen) {
      return;
    }
    this.isModalOpen = true;
    console.log('Is modal open: ', this.isModalOpen);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onToggleEvent(value: boolean) {
    this.isModalOpen = value;
  }
}
