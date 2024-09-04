import { useAppSelector } from "../store"
import { allPermissions, localState } from "../utils/helper"

const useAuth = () => {
    // get user permissions from store
    const permissionsInAccounts = useAppSelector((state) => state.app.user.permissionsInAccounts[0]?.permissions)
    // check user permissions against all possible permissions
    const hasPermission = permissionsInAccounts?.every(permission => allPermissions.includes(permission))

    const hasLoggedIn = !!localStorage.getItem(localState.ACCESS_TOKEN)

    return (hasPermission || hasLoggedIn)
} 

export default useAuth