import React from "react";
import { IArticle } from "../types";

interface IPropType {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
        {articles.map((article) => {
          return <span>{article.attributes.Title}</span>;
        })}
      </div>
    </>
  );
};

export default ArticleList;
