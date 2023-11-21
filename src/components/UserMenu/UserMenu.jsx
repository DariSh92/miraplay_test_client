import { useAuth } from '../../hooks/useAuth';
import { RegisterLoginInfo, LoginGreeting,  UserName } from '../../components/UserMenu/UserMenu.styled';


export const UserMenu = () => {
    const { user } = useAuth();
    return (
        <RegisterLoginInfo>
        {user ? (
            <LoginGreeting>
                Welcome, &nbsp; <UserName>{user.name}</UserName>
            </LoginGreeting>
        ) : null}
    </RegisterLoginInfo>
    );
};