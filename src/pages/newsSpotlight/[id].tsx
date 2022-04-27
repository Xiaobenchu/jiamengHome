import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ArticleInterface } from '@/jmlib/types';
import { HeaderComponent } from '@/component/headerComponent';
import { FooterComponent } from '@/component/footerComponent';
import NewsCategory from '@/component/newsCategory';
import { ArticleItem } from '@/component/ArticleItem';
import { MsgOverlay } from '@/component/msgOverlay';
import { getRecommendArticles, getArticles } from '../../services/articles';
import styles from '../../styles/newsSpotlight.module.scss';

interface NewsSpotlightInterface {
  data: any;
  articleId: number;
  categoryData: any;
}

export default function NewsSpotlight(props: NewsSpotlightInterface) {
  const { data, articleId, categoryData } = props;

  const [serverArticlesData, setServerArticlesData] = useState<
    ArticleInterface[]
  >([]);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const recommendArticles = async () => {
      try {
        const res = getRecommendArticles({
          pageSize: 20,
          page,
        }).then((res1) => {
          setTotal(res1.total);
          const k: any = [];
          for (let i = 0; i < res1.list.length; i += 1) {
            k.push(res1.list[i]);
          }
          if (page > 1) {
            setServerArticlesData(serverArticlesData.concat(k));
          }
        });
        console.log('res', res);
      } catch (e) {
        console.log('login error', e.code);
      }
    };
    const articlesCategoryList = async () => {
      try {
        const res = await getArticles({
          pageSize: 20,
          page,
          cid: articleId,
        }).then((res1) => {
          setTotal(res1.total);
          const k: any = [];
          for (let i = 0; i < res1.list.length; i += 1) {
            k.push(res1.list[i]);
          }
          if (page > 1) {
            setServerArticlesData(serverArticlesData.concat(k));
          }
        });
        console.log('res', res);
      } catch (e) {
        console.log('login error', e.code);
      }
    };
    if (articleId === 0 && page > 1) {
      recommendArticles();
    }
    if (articleId > 1 && page > 1) {
      articlesCategoryList();
    }
  }, [refreshing]);

  useEffect(() => {
    setTotal(data.total);
    setServerArticlesData(data.list);
    setPage(1);
  }, [data]);

  const [visible, setVisible] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  const overlayTimer = () => {
    setTimeout(() => {
      setVisible(false);
      setSubmitError('');
    }, 1200);
  };
  const toggleOverlay = () => {
    setVisible(true);
    setSubmitError('暂无更多新闻');
    overlayTimer();
  };
  const loadMore = () => {
    if (serverArticlesData.length < total) {
      setPage(page + 1);
      setRefreshing(!refreshing);
    } else {
      setIsAdd(false);
      toggleOverlay();
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta
          name="Description"
          content="时代加盟网，中国品牌招商加盟综合服务平台。严选连锁品牌，汇集热门商机，通过智能匹配和一键直聊，让创业者与品牌方直接联系。覆盖餐饮加盟、教育加盟、美容加盟、酒店加盟、干洗加盟、服装加盟等20个大行业分类，通过严格的项目审核为创业者把好创业第一道关。时代加盟网旨在为创业者与品牌方直接建立快捷的信息沟通的桥梁！"
        />
        <meta
          name="keywords"
          content="加盟,连锁,创业,投资,招商,代理,商机,开店,找项目,创业项目,品牌加盟,商机网,加盟店,加盟平台,加盟网,时代加盟网"
        />
        <title>
          时代加盟网—连锁品牌招商加盟直聊平台_品牌加盟_严选优质加盟创业项目
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <MsgOverlay
        visible={visible}
        msg={submitError}
        onPress={() => {
          setVisible(false);
        }}
      />
      <div className={styles.contentBox}>
        <NewsCategory data={categoryData} idx={articleId} />
        <div className={styles.newsBox}>
          {serverArticlesData.map((item, index) => (
            <ArticleItem data={item} key={index.toString()} />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <div
            className={styles.btn}
            onPointerUp={() => {
              // if (serverArticlesData.length < total) {
              loadMore();
              // toggleOverlay();
            }}
          >
            <span className={styles.title}>展开更多</span>
            <span className={`${styles.toTopIcon} iconfont iconsousuo-copy`} />
          </div>
        </div>
      </div>
      <FooterComponent showImg />
    </div>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const res = await fetch(
    'https://api.jm360.net/article/recommend/?pageSize=20&page=1',
  );
  const res2 = await fetch(
    `https://api.jm360.net/articles?pageSize=20&page=1&cid=${context.query.id}`,
  );

  const getCategory = await fetch('https://api.jm360.net/article_categories');
  const categoryData = await getCategory.json();

  const articleId = parseInt(context.query.id, 10);
  let data;
  if (articleId === 0) {
    data = await res.json();
  } else {
    data = await res2.json();
  }
  return {
    props: { data, articleId, categoryData },
  };
}
