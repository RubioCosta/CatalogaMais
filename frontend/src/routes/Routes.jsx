import { BrowserRouter } from 'react-router-dom'

// Routes
import { PublicRoutes } from './PublicRoutes'

export function Routes() {

  return(
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );

}