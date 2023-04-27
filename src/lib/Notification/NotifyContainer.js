
import {ToastContainer} from 'react-toastify';

export default function NotifyContainer(props) {
  return <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={false} newestOnTop closeOnClick rtl={false}
    pauseOnVisibilityChange
    draggable pauseOnHover {...props} />;
}
