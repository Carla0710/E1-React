
import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";
import { CategoryWidget } from "../../components/categories/category_widget/category_widget";
//import { ProductCard } from "../../components/products/product_card/product_card";
import { ProductWidget } from "../../components/products/product_widget/product_widget";
import { CategoryCard } from "../../components/categories/category_card/category_card";
import { Footer } from "../../components/footer/footer";
import { HomeLayout } from "../../layout/home/home_layout";

export const HomeScreen = () => {
    return (
        <>
        <Navbar />
            <HomeLayout>
            <Header />
            <CategoryWidget />
           {/* <ProductCard/> */}
            <ProductWidget />
            <CategoryCard />
            </HomeLayout>
            <Footer />
            </>
    );
};