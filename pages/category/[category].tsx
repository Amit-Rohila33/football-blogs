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
import Pagination from "../../components/Pagination";
import { capitalizeFirstLetter, makeCategory } from "../../utils";
import { useRouter } from "next/router";

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
  slug: string;
}

const category = ({ categories, articles, slug }: IPropType) => {
  const { page, pageCount } = articles.pagination;
  const router = useRouter();
  const { category: categorySlug } = router.query;

  const formattedCategory = () => {
    return capitalizeFirstLetter(makeCategory(slug));
  };
  return (
    <div>
      <Head>
        <title>Football's blog - {formattedCategory()}</title>
      </Head>
      <Tabs categories={categories.items} />
      <ArticleList articles={articles.items} />
      <Pagination
        page={page}
        pageCount={pageCount}
        redirectUrl={`/category/${categorySlug}`}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // console.log("query",{query})
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        slug: query.category,
      },
    },
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 1,
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
      slug: query.category,
    },
  };
};

export default category;
