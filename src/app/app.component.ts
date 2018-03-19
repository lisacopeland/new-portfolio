import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // logoPic = '/assets/checkmatelogo.png';
  flashCardImage = '/assets/flashcardscreen.jpg';
  contactForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
        'email': new FormControl('', [Validators.required]),
        'message': new FormControl('', [Validators.required]),
    });
  }

  onSend() {
    console.log(this.contactForm);
  }

}
