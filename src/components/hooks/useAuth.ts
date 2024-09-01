import { useAppSelector } from '../store';


const useAuth = () => {
    const isAuthenticated = !!useAppSelector((state) => state.app.user.accounts[0]?.id) ?? null

    return isAuthenticated
} 

export default useAuth