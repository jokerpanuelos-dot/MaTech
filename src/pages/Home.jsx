import { useEffect } from "react";
import { supabase } from "../services/supabase";

function Home() {
  useEffect(() => {
    console.log("Supabase client:", supabase);
  }, []);

  return (
    <div>
      <h1>MaTech</h1>
      <p>Supabase is connected.</p>
    </div>
  );
}

export default Home;