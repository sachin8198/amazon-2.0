import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'


export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

        <Header />
        <Banner />
        <ProductFeed products={products} />

      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())

  return {
    props: {
      products
    }
  }


}
