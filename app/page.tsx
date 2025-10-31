import Header from "@/components/header"
import Banner from "@/components/banner"
import WhatsAppButton from "@/components/whatsapp-button"
import FeaturedProducts from "@/components/featured-products"
import AllProductsSection from "@/components/all-products-section"
import PromoBanner from "@/components/promo-banner"
import BrandsSection from "@/components/brands-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Banner />
      <FeaturedProducts />
      <AllProductsSection />
      <PromoBanner />
      <BrandsSection />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
