import { useAppSelector } from '../store';
import { allPermissions } from '../utils/helper';


const useAuth = () => {
    const permissionsInAccounts = useAppSelector((state) => state.app.user.permissionsInAccounts[0]?.permissions)
    return permissionsInAccounts?.every(permission => allPermissions.includes(permission))
} 

export default useAuth