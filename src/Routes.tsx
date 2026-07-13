import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

// Layout
import Desktop from 'layout/Desktop';

// Views
import { About, Contact, Home, Portfolio } from 'views';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<Desktop />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
