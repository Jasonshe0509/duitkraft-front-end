import registerIcon from "../assets/register success icon.png";
import "../styles/popup.css";
import "../styles/main.css";
import bg from '../assets/bg3.png'

function EditProfileModal() {
    return (
        <main>
            <img src={bg} className='background flex' alt='background' />
            <div className="profileModalContainer">
                <div className="successIcon">
                    <img src={registerIcon} alt="register_icon" />
                </div>
                <div className="body">
                    <h3 className="text-fontColor">Edit Profile Succesfully!!!</h3>
                </div>
            </div>
        </main>
    );
}

export default EditProfileModal;