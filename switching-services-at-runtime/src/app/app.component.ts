import {Component} from '@angular/core';
import {IBusinessService} from "../services/interfaces/business-service.interface";
import {SwitchingService} from "../services/implementations/switching.service";
import {BusinessServiceConstant} from "../constant/business-service.constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;

  constructor(public switchingService: SwitchingService) {
    this.name = BusinessServiceConstant.employeeService;
  }

  public switchService() {
    if (this.switchingService.serviceName == BusinessServiceConstant.employeeService) {
      this.switchingService.serviceName = BusinessServiceConstant.employerservice;
    } else this.switchingService.serviceName = BusinessServiceConstant.employeeService;
  }
}
