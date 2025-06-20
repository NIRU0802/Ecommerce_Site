import Carousel from "@/components/Carousel";
import CategorySection from "@/components/CategorySection";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Carousel />
      <NewArrivals />
      <CategorySection />
    </main>
  );
}
