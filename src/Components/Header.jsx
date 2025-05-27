import trollFace from '../assets/troll_face.jpg';
const Header = () => {
    return ( 
        <header className="header">
            <img src={trollFace} alt="troll face was here" />
            <h1>Meme Generator</h1>
        </header>
     );
}
 
export default Header;