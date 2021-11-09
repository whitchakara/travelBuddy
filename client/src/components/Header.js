import {Link} from '@reach/router';

const Header = (props)=> {
    const {link, linkText,subText}= props;




    return(
        <div>
            <Link to={link}>{linkText}</Link>
            <p>{subText}</p>
        </div>
    )
}
export default Header;