import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface modeOfEvent {
  mode: string;
}
@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.scss']
})
export class HostEventComponent {
  modeOfEvent!: string;
  paidOrFree !: string;
  eventForm!: FormGroup;

  selectedMode: modeOfEvent | undefined;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      hostedBy: ['', Validators.required],
      description: ['', Validators.required],
      eventDateTime: ['', Validators.required],
      modeOfEvent: ['', Validators.required],
      venue: [''],
      webinarLink: [''],
      amount: [''],
      paidOrFree: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      // Handle form submission logic
      console.log(this.eventForm.value);
    }
  }
  }


