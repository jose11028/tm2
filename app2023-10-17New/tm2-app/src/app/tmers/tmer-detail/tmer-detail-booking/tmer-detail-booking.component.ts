import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bwm-tmer-detail-booking',
  templateUrl: './tmer-detail-booking.component.html',
  styleUrls: ['./tmer-detail-booking.component.scss']
})
export class TmerDetailBookingComponent implements OnInit{

 
  
  @Input() price: number | undefined;
  public daterange: any = {};
  

  constructor() {}
  
  ngOnInit(): void {
  }



  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens: 'center'
  };
 
  public selectedDate(value: any, datepicker?: any) {
    
 
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;
 
    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }


}
