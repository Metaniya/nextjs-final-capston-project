import { Suspense } from "react";
import Menu from "../../components/Menu";

// useSearchParams() needs a Suspense boundary in the App Router.
export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <p className="status" role="status">
          Loading menu...
        </p>
      }
    >
      <Menu />
    </Suspense>
  );
}
