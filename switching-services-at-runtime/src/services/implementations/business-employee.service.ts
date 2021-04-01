import {IBusinessService} from "../interfaces/business-service.interface";
import {Injectable} from "@angular/core";
import {BusinessServiceConstant} from "../../constant/business-service.constant";

@Injectable()
export class BusinessEmployeeService implements IBusinessService {

  public serviceName = BusinessServiceConstant.employeeService;

  public compareName(source: string): boolean {
    return source === BusinessServiceConstant.employeeService;
  }

  public create(): string {
    return 'Hello service employee';
  }

  public getRole(): string {
    return BusinessServiceConstant.employeeService;
  }
}
