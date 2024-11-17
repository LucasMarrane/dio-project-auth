import { AuthApi } from "..";

interface ILogin{
  email: string;
  senha: string;
}

interface ILoginResponse{
  id: number
  name: string
  email: string
  senha: string
}

export class UsersController extends AuthApi {
  static async login(params: ILogin) : Promise<Array<ILoginResponse>>{
    const { data } = await this._httpClient.get(`users`, {params});
   
    return data;
  }
}
