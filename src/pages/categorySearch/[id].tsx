import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { HeaderComponent } from '@/component/headerComponent';
import { ListProjectInterface } from '@/jmlib/types';
import { FooterComponent } from '@/component/footerComponent';
import { getProjectList } from '@/services/search';
import { LeaderBoardProject } from '@/component/LeaderBoardProject';

import { getArticles, getArticlesCategories } from '@/services/articles';
import { ArticleItem } from '@/component/ArticleItem';
import styles from '../../styles/categorySearch/categorySearch.module.css';

interface CategorySearchProps {
  data?: boolean;
  //   categoryList: any;
  seoData: any;
}

const CostList = [
  '全部',
  '5万元以下',
  '5万元-10万元',
  '10万-20万元',
  '20万-50万元',
  '50万元以上',
];

export default function CategorySearch(props: CategorySearchProps) {
  const { seoData } = props;

  const [page, setPage] = useState(1);
  const [isAdd, setIsAdd] = useState(true);

  const [selectCost, setSelectCost] = useState('全部');

  const [titleName, setTitleName] = useState('');

  const [projectList, setProjectList] = useState<ListProjectInterface[]>([]);

  const [articleCategory, setArticleCategory] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [selectArticle, setSelectArticle] = useState(0);

  const [articlePage, setArticlePage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 计算最小金额
  const getMinCost = () => {
    if (selectCost === '不限') {
      return '';
    }
    if (selectCost === '5万元以下') {
      return 0;
    }
    if (selectCost === '5万元-10万元') {
      return 1;
    }
    if (selectCost === '10万-20万元') {
      return 10;
    }
    if (selectCost === '20万-50万元') {
      return 20;
    }
    if (selectCost === '50万元以上') {
      return 50;
    }
    return '';
  };
  // 计算最大金额
  const getMaxCost = () => {
    if (selectCost === '不限') {
      return '';
    }
    if (selectCost === '5万元以下') {
      return 1;
    }
    if (selectCost === '5万元-10万元') {
      return 10;
    }
    if (selectCost === '10万-20万元') {
      return 20;
    }
    if (selectCost === '20万-50万元') {
      return 50;
    }
    if (selectCost === '50万元以上') {
      return 0;
    }
    return '';
  };

  const getProjectDataList = (
    keyword?: any,
    bigCategoryId?: any,
    categoryId?: any,
  ) => {
    getProjectList({
      pageSize: 10,
      page,
      maxCost: getMaxCost(),
      minCost: getMinCost(),
      keyword,
      bigCategoryId,
      categoryId,
    }).then((res) => {
      console.log(res, projectList, 'projectList111');
      if (res.length === 0 || res.length % 10 !== 0) {
        setIsAdd(false);
      }
      if (page > 1) {
        setProjectList(projectList.concat(res));
      } else {
        setProjectList(res);
      }
    });
    if (keyword) {
      setTitleName(keyword);
    }
  };

  useEffect(() => {
    getArticlesCategories().then((res) => {
      setArticleCategory(res);
      setSelectArticle(res[0].id);
    });
  }, []);

  useEffect(() => {
    if (seoData.id && seoData.parentId === 0) {
      getArticles({
        bigCategoryId: seoData.id,
        // cid: selectArticle,
        pageSize: 8,
        page: articlePage,
      }).then((res) => {
        if (res.list.length < 8) {
          setHasMore(false);
        }
        if (articlePage > 1) {
          setArticleList(articleList.concat(res.list));
        } else {
          setArticleList(res.list);
        }
      });
    }
    if (seoData.id && seoData.parentId !== 0) {
      getArticles({
        categoryId: seoData.id,
        // cid: selectArticle,
        pageSize: 8,
        page: articlePage,
      }).then((res) => {
        if (res.list.length < 8) {
          setHasMore(false);
        }
        if (articlePage > 1) {
          setArticleList(articleList.concat(res.list));
        } else {
          setArticleList(res.list);
        }
      });
    }
  }, [selectArticle]);

  useEffect(() => {
    let keyword;
    let bigCategoryId;
    let categoryId;
    if (document.location.search.split('keyword=')[1]) {
      keyword = decodeURI(document.location.search.split('keyword=')[1]);
    }
    if (seoData.id && seoData.parentId === 0) {
      bigCategoryId = seoData.id;
    }
    if (seoData.id && seoData.parentId !== 0) {
      categoryId = seoData.id;
    }
    if (seoData.name) {
      setTitleName(seoData.name);
    }
    try {
      setIsAdd(true);
      getProjectDataList(keyword, bigCategoryId, categoryId);
    } catch (e) {
      console.log('获取数据发生错误');
    }
  }, [page, selectCost]);

  return (
    <>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta name="referrer" content="no-referrer" />
        <meta
          name="Description"
          content={
            seoData && seoData.seoDescription
              ? seoData.seoDescription
              : '时代加盟网，中国品牌招商加盟综合服务平台。严选连锁品牌，汇集热门商机，通过智能匹配和一键直聊，让创业者与品牌方直接联系。覆盖餐饮加盟、教育加盟、美容加盟、酒店加盟、干洗加盟、服装加盟等20个大行业分类，通过严格的项目审核为创业者把好创业第一道关。时代加盟网旨在为创业者与品牌方直接建立快捷的信息沟通的桥梁！'
          }
        />
        <meta
          name="keywords"
          content={
            seoData && seoData.seoKeywords
              ? seoData.seoKeywords
              : '加盟,连锁,创业,投资,招商,代理,商机,开店,找项目,创业项目,品牌加盟,商机网,加盟店,加盟平台,加盟网,时代加盟网'
          }
        />
        <title>
          {seoData && seoData.seoTitle
            ? seoData.seoTitle
            : '时代加盟网—连锁品牌招商加盟直聊平台_品牌加盟排行榜_严选优质加盟创业项目'}
        </title>
      </Head>
      <HeaderComponent isProject title={titleName} />
      <div className={styles.container}>
        <div className={styles.box}>
          <span>投资金额:</span>
          {CostList.map((item) => {
            return (
              <span
                key={item}
                className={selectCost === item ? styles.selectCost : ''}
                onPointerUp={() => {
                  setSelectCost(item);
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className={styles.projectBox}>
          {projectList.map((item, index) => (
            <LeaderBoardProject
              data={{ projectId: item.id, project: item }}
              key={index.toString()}
              noLeader
            />
          ))}
        </div>
        <div>
          {isAdd ? (
            <span
              className={styles.more}
              onPointerUp={() => {
                if (isAdd) {
                  setPage((v) => v + 1);
                }
              }}
            >
              加载更多 &gt;
            </span>
          ) : (
            <span className={styles.noMore}>-- 暂无更多数据 --</span>
          )}
        </div>
        {articleList.length ? (
          <div className={styles.categoryNews}>
            <div className={styles.articleTitleBox}>
              {/* {articleCategory.slice(0, 2).map((item: any) => {
                return (
                  <a
                    onPointerUp={() => {
                      setSelectArticle(item.id);
                    }}
                  >
                    <span
                      className={`${
                        selectArticle === item.id ? styles.selectColor : ''
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                );
              })} */}
              <a>
                <span>相关资讯</span>
              </a>
            </div>
            <div className={styles.articleBox}>
              {articleList.map((item: any) => (
                <ArticleItem key={item.id} data={item} />
              ))}
            </div>
            {hasMore ? (
              <span className={styles.more}>
                <a
                  onPointerUp={() => {
                    setArticlePage((v) => v + 1);
                  }}
                >
                  展示更多&gt;
                </a>
              </span>
            ) : (
              <span className={styles.more}>
                <a>没有更多新闻了</a>
              </span>
            )}
          </div>
        ) : null}
      </div>
      <FooterComponent showImg />
    </>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  //   const res = await fetch('https://api.jm360.net/page/category');
  //   const categoryList = await res.json();

  const seo = await fetch(
    `https://api.jm360.net/categories/${context.query.id}`,
  );

  const seoData = await seo.json();

  // Pass data to the page via props
  return { props: { seoData } };
}
