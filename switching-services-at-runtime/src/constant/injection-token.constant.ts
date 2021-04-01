import {InjectionToken} from '@angular/core';
import {IBusinessService} from "../services/interfaces/business-service.interface";

export const BUSINESS_SERVICE_PROVIDER = new InjectionToken<IBusinessService>('BUSINESS_SERVICE_PROVIDER');
