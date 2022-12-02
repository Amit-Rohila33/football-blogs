import React from "react";
import Head from "next/head";
import Tabs from "../../components/Tabs";
import next, { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
} from "../../types";
import { fetchArticles, fetchCategories } from "../../http";
import qs from "qs";
import ArticleList from "../../components/ArticleList";

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
}

const category = ({ categories, articles }: IPropType) => {
  const formattedCategory = () => {
    return "Test Category";
  };
  return (
    <div>
      <Head>
        <title>Football's blog - {formattedCategory()}</title>
      </Head>
      <Tabs categories={categories.items} />
      <ArticleList articles={articles.items} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // console.log("query",{query})
  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        slug: query.category,
      },
    },
  };

  const queryString = qs.stringify(options);
  // console.log(queryString)

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};

export default category;
