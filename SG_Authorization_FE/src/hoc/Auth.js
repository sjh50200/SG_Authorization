import { useSelector } from 'react-redux';

export default function Auth(SpecificComponent, option) {
    
    const userRole = useSelector(state => state.user.auth);
    console.log(userRole);

    return( <SpecificComponent/> );
}
