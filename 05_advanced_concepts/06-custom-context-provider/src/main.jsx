import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import UserProvider from './context/UserProvider.jsx'
import ProjectProvider from './context/ProjectProvider.jsx'


createRoot(document.getElementById('root')).render(

    // Wrap App with Context Providers
    <UserProvider>  

        {/* Provide project data to entire app */}
        <ProjectProvider>

            <App />
            
        </ProjectProvider>
        
    </UserProvider>


)
