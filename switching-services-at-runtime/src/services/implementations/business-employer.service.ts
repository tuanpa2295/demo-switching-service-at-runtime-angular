import {IBusinessService} from "../interfaces/business-service.interface";
import {Injectable} from "@angular/core";
import {BusinessServiceConstant} from "../../constant/business-service.constant";

@Injectable()
export class BusinessEmployerService implements IBusinessService {

  public serviceName = BusinessServiceConstant.employerservice;

  public compareName(source: string): boolean {
    return source === BusinessServiceConstant.employerservice;
  }

  public create(): string {
    return 'Hello service employer';
  }

  public getRole(): string {
    return BusinessServiceConstant.employerservice;
  }
}
