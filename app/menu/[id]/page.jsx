import DishDetail from "../../../components/DishDetail";

// In Next.js 15+ `params` is a Promise.
export default async function DishPage({ params }) {
  const { id } = await params;
  return <DishDetail id={id} />;
}
