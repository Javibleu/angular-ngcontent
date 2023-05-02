
// Does'nt need Injectable decorator as it does not have any dependency
export class ApiService {

  constructor() { }

  get(path: string): Array<any> {
    return ['soy', 'el', 'apiService']
  }
}
