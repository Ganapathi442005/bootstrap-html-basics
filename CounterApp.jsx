import { useEffect } from "react";

function Movie() {
  useEffect(() => {
    document.title = "🕷️ Movie Card Gallery";
  }, []);

  return (
    <div>
      <h1>🕷️ Movie Card Gallery</h1>
    </div>
  );
}

export default Movie
