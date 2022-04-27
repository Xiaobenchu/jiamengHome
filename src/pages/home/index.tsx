import { useEffect, useState } from 'react';
import { HotProject } from '@/component/hotProject';
import { BrandCategory } from '@/component/brandCategory';
import { ArticleItem } from '@/component/ArticleItem';
import {
  getArticles,
  getArticlesCategories,
  getRecommendArticles,
} from '@/services/articles';
import SwipeableViews from 'react-swipeable-views';
import { getProjectList } from '@/services/search';
import styles from '../../styles/Home.module.css';

// import Article from '../article';

interface HomeProps {
  hotProject: any;
  categoryData: any;
  brandCategoryData: any;
  recommendArticle: any;
}

export default function Home(props: HomeProps) {
  const {
    hotProject,
    categoryData,
    brandCategoryData,
    recommendArticle,
  } = props;

  const [articleCategory, setArticleCategory] = useState([]);
  const [selectArticle, setSelectArticle] = useState(0);
  const [articleList, setArticleList] = useState([]);
  const [articlePage, setArticlePage] = useState(1);

  // 分类加载更多
  const [moreNum, setMoreNum] = useState(1);
  const [moreCategoryList, setMoreCategoryList] = useState([]);

  const [recommendMore, setRecommendMore] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(true);
    if (selectArticle !== 0) {
      getArticles({ cid: selectArticle, pageSize: 8, page: articlePage }).then(
        (res) => {
          if (res.list.length < 8) {
            setHasMore(false);
          }
          if (articlePage > 1) {
            setArticleList(articleList.concat(res.list));
          } else {
            setArticleList(res.list);
          }
        },
      );
    } else {
      getRecommendArticles({ pageSize: 8, page: articlePage }).then((res) => {
        if (res.list.length < 8) {
          setHasMore(false);
        }
        if (articlePage > 1) {
          setRecommendMore(recommendMore.concat(res.list));
        } else {
          setRecommendMore(res.list);
        }
      });
    }
  }, [selectArticle, articlePage]);

  const getMoreCategory = () => {
    const arr: any = [];
    const list = categoryData.slice(4, categoryData.length);
    list.forEach((item: any) => {
      getProjectList({
        bigCategoryId: item.id,
        page: 1,
        pageSize: 4,
      }).then((res) => {
        arr.push(res);
      });
    });
    setMoreCategoryList(arr);
  };

  useEffect(() => {
    getArticlesCategories().then((res) => {
      setArticleCategory(res);
    });
    getMoreCategory();
  }, []);

  // 热门项目
  const hotProjectData: JSX.Element[] = [];
  const newProjectList = [];
  let arr = [];

  for (let i = 0; i < hotProject.length; i += 1) {
    arr.push(hotProject[i]);
    if (i > 0 && (i + 1) % 2 === 0) {
      newProjectList.push(arr);
      arr = [];
    }
  }

  for (let i = 0; i < newProjectList.length; i += 1) {
    const div = (
      <div className={styles.newHotBox}>
        {newProjectList.length &&
          newProjectList[i].map((item: any) => {
            return <HotProject data={item} key={item.id} />;
          })}
      </div>
    );
    hotProjectData.push(div);
  }
  const [idx, setIdx] = useState(0);

  return (
    <div className={styles.box}>
      {/* <HeaderComponent /> */}
      <div className={styles.main}>
        <div className={styles.menuBox}>
          <span>热门项目</span>
          <span>热门商机在这里</span>
        </div>
        <div className={styles.hotProjectBox}>
          <a
            className={styles.hotIconLeft}
            onPointerUp={() => {
              if (idx > 0) {
                setIdx((v) => v - 1);
              }
            }}
          >
            <span className={`iconfont iconfanhui ${styles.hotIcon}`}> </span>
          </a>
          <a
            className={styles.hotIconRight}
            onPointerUp={() => {
              if (idx < Math.round(hotProject.length / 2) - 1) {
                setIdx((v) => v + 1);
              }
            }}
          >
            <span className={`iconfont iconright ${styles.hotIcon}`}> </span>
          </a>
          <SwipeableViews
            index={idx}
            onChangeIndex={(index: number) => {
              setIdx(index);
            }}
          >
            {hotProjectData}
          </SwipeableViews>
          {/* {hotProject.map((item: any) => {
            return <HotProject data={item} />;
          })} */}
        </div>
        <div className={styles.menuBox}>
          <span>品牌大全</span>
          <span>大家都在查看的品牌</span>
        </div>
        <div className={styles.brandCategoryBox}>
          {brandCategoryData.map((item: any, i: any) => {
            return (
              <BrandCategory
                key={item[0].id}
                data={item}
                category={categoryData[i]}
              />
            );
          })}
          {moreNum > 1
            ? moreCategoryList.map((item: any, i: any) => {
                return (
                  <BrandCategory
                    key={item[0].id}
                    data={item}
                    category={categoryData[i + 4]}
                  />
                );
              })
            : null}
        </div>
        <span className={styles.moreBrand}>
          {moreNum > 1 ? (
            <span>已加载全部分类数据</span>
          ) : (
            <span
              onPointerUp={() => {
                setMoreNum((v) => v + 1);
              }}
            >
              展示更多品类&gt;
            </span>
          )}
        </span>
        <div className={styles.articleTitleBox}>
          <a
            onPointerUp={() => {
              setArticlePage(1);
              setSelectArticle(0);
            }}
          >
            <span
              className={`${selectArticle === 0 ? styles.selectColor : ''}`}
            >
              加盟头条
            </span>
          </a>
          {articleCategory.slice(0, 6).map((item: any) => {
            return (
              <a
                onPointerUp={() => {
                  setArticlePage(1);
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
          })}
        </div>
        <div className={styles.articleBox}>
          {selectArticle !== 0
            ? articleList.map((item: any) => (
                <ArticleItem key={item.id} data={item} />
              ))
            : null}
          {selectArticle === 0 && articlePage === 1
            ? recommendArticle.list.map((item: any) => (
                <ArticleItem key={item.id} data={item} />
              ))
            : null}
          {selectArticle === 0 && articlePage !== 1
            ? recommendMore.map((item: any) => (
                <ArticleItem key={item.id} data={item} />
              ))
            : null}
        </div>
        {hasMore ? (
          <span
            className={styles.moreBrand}
            onPointerUp={() => {
              setArticlePage((v) => v + 1);
            }}
          >
            <a>展示更多&gt;</a>
          </span>
        ) : (
          <span className={styles.moreBrand}>
            <a>没有更多新闻了</a>
          </span>
        )}
      </div>
      {/* <FooterComponent showImg /> */}
    </div>
  );
}

// export async function getServerSideProps(context: {
//   query: { page: 1; pageSize: 20 };
// }) {
//   // const res = await fetch('https://api.jm360.net/projects?pageSize=20&page=1');
//   // const data = await res.json();

//   const getHotProject = await fetch('https://api.jm360.net/project/hot');
//   const hotProject = await getHotProject.json();

//   const getPageCategory = await fetch('https://api.jm360.net/page/category');
//   const pageCategory = await getPageCategory.json();
//   const categoryData = pageCategory.categoryList;

//   const getOneData = await fetch(
//     `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[0].id}`,
//   );
//   const oneData = await getOneData.json();

//   const getTwoData = await fetch(
//     `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[1].id}`,
//   );
//   const twoData = await getTwoData.json();

//   const getThreeData = await fetch(
//     `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[2].id}`,
//   );
//   const threeData = await getThreeData.json();

//   const getFourData = await fetch(
//     `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[3].id}`,
//   );
//   const fourData = await getFourData.json();

//   const brandCategoryData = [oneData, twoData, threeData, fourData];

//   const getRecommendArticle = await fetch(
//     'https://api.jm360.net/article/recommend?pageSize=8&page=1',
//   );
//   const recommendArticle = await getRecommendArticle.json();

//   return {
//     props: { hotProject, categoryData, brandCategoryData, recommendArticle },
//   };
// }
