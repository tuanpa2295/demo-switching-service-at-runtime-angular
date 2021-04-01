import {Injectable} from "@angular/core";
import {BusinessEmployeeService} from "./business-employee.service";
import {BusinessEmployerService} from "./business-employer.service";
import {IBusinessService} from "../interfaces/business-service.interface";
import {BusinessServiceConstant} from "../../constant/business-service.constant";

@Injectable()
export class SwitchingService {

  public serviceName = BusinessServiceConstant.employeeService;

  constructor (
    private _businessEmployeeService: BusinessEmployeeService,
    private _businessEmployerService: BusinessEmployerService
  ) {}

  public get instance(): IBusinessService {
    if (this.serviceName == BusinessServiceConstant.employeeService) return this._businessEmployeeService;
    else return this._businessEmployerService;
  }
}
