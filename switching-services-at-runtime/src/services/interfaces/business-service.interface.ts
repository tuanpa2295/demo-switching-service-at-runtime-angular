export interface IBusinessService {
  compareName: (source: string, subString: string) => boolean;
  create: () => string;
  getRole: () => string;
}
