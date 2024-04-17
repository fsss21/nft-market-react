import './Auth.scss';
import Header from '../../components/Header';
import Login from './Login';
import Registration from './Registration';

const Auth = () => {
    return (
        <>
            <Header />
            <div>
                <Login />
                <Registration />
            </div>
        </>
    );
};

export default Auth;
