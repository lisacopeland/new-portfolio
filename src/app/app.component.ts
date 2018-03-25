import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // logoPic = '/assets/checkmatelogo.png';
  flashCardImage = '/assets/flashcardscreen.jpg';
  lisaPicture = '/assets/lisaphoto1.jpg';
  iconPic = '/assets/Combined 2 Lines_PNG.png';
  iconPic2 = '/assets/Combined One Line_PNG.png';
  mongopic = '/assets/mongo-pic.png';
  googlepic = '/assets/googlecloud-pic.png';
  contactForm: FormGroup;

  constructor(private db: AngularFireDatabaseModule) {}

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
    this.contactForm.reset();
  }

}
