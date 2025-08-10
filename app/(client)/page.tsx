import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import { Button } from '@/components/ui/button';
import React from 'react'
import ProductGrid from '@/components/ProductGrid';
import HomeCategories from '@/components/HomeCategories';
import { getCategories } from "@/sanity/queries";
import ShopByBrands from '@/components/ShopByBrands';
import LatestBlog from '@/components/LatestBlog';

const Home = async() => {
  const categories = await getCategories(6);
  return (
    <Container className='py-10'>
      <HomeBanner/>
      <ProductGrid/>
      <HomeCategories categories={categories}/>
      <ShopByBrands/>
      <LatestBlog/>
    </Container>
  )
}

export default Home;