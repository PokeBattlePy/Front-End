import '../styles/globals.css'
import { UserProvider } from '../context/userContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
