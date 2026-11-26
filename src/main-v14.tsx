import { createRoot } from "react-dom/client";
import V14 from "./pages/V14";

// Standalone V14 preview entry: no global app styles, so the V14 design renders untouched.
createRoot(document.getElementById("root")!).render(<V14 />);
