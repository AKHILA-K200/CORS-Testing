import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cors-testing';
  constructor(private service:AppService){}
  submit(){

    let request: any = {
      "email": "vinu@mailinator.com"
    };
this.service.submitToServer(request).subscribe((res)=>{
  console.log(res);
});
  }
}
