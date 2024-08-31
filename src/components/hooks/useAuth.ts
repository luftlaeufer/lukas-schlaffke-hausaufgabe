import { token } from '../utils/helper';

export const useAuth = () => !!sessionStorage.getItem(token.ACCESS_TOKEN)