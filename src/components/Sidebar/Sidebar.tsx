import {useAuth} from '../../AuthContext/AuthContext.tsx';
import {supabase} from '../../supabase.ts';

const Sidebar = () => {

  const {setIsAuth} = useAuth()

  const handleLogout = async () => {
    try {
      const {error} = await supabase
        .auth
        .signOut();
      if (error) {
        alert(error.message);
      } else {
        setIsAuth(false);
      }
    }
    catch {
      alert('Failed to logout')
    }
  }

  return (
    <div className="sidebar">
      <button onClick={handleLogout} className="sidebar__logout">Log out</button>
    </div>
  )
}

export  default Sidebar
