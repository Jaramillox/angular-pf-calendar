import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate: Date;
  // Controlamos las fechas minimas y maximas para pedir una cira
  maxAppointmentDate = new Date();
  minAppointmentDate = new Date();
  disabledDates: Array<Date>;

  /*------------------- Eventos -----------------------*/
  ngOnInit() {
    this.minAppointmentDate = new Date();
    this.maxAppointmentDate.setFullYear(
      this.maxAppointmentDate.getFullYear() + 1
    );
  }
}
