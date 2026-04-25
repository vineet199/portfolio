import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/pages/Home";
import Freelance from "@/pages/Freelance";

// We keep a simple router setup even for a single page app 
// to maintain standard structure and allow future expansion
const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full"
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/freelance" component={Freelance} />
          <Route>
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground flex-col gap-4">
              <h1 className="text-4xl font-display font-bold">404</h1>
              <p className="text-muted-foreground">Page not found</p>
              <a href="/" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Go Home
              </a>
            </div>
          </Route>
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
