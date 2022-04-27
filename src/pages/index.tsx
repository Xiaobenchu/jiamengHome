import Head from 'next/head';
import { HomeCategory } from '@/component/homeCategory';
import { HeaderComponent } from '../component/headerComponent';
import { FooterComponent } from '../component/footerComponent';
import MyHome from './home';
import styles from '../styles/Home.module.css';

interface HomePageProps {
  category?: any;
  banner?: any;
  recommendData?: any;
  journalData?: any;
  raidersData?: any;
  categoryList: any;
  hotProject: any;
  // hotCategory: any;
  brandCategoryData: any;
  recommendArticle: any;
  projectList: any;
}

export default function Home(props: HomePageProps) {
  const {
    category,
    banner,
    recommendData,
    journalData,
    raidersData,
    categoryList,
    hotProject,
    // hotCategory,
    brandCategoryData,
    recommendArticle,
    projectList,
  } = props;

  const categoryData = [...categoryList.categoryList];
  const length = Math.round(categoryList.categoryList.length / 2);
  const categoryAccept = [];
  for (let i = 0; i < length; i += 1) {
    if (categoryData.length >= 2) {
      categoryAccept.push(categoryData.slice(0, 2));
      categoryData.splice(0, 2);
    }
    if (categoryData.length < 2 && categoryData.length) {
      categoryAccept.push(categoryData.slice(0, categoryData.length));
      categoryData.splice(0, categoryData.length);
    }
  }

  return (
    <div className={styles.box}>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta name="referrer" content="no-referrer" />
        <meta
          name="Description"
          content="时代加盟网，中国品牌招商加盟综合服务平台。严选连锁品牌，汇集热门商机，通过智能匹配和一键直聊，让创业者与品牌方直接联系。覆盖餐饮加盟、教育加盟、美容加盟、酒店加盟、干洗加盟、服装加盟等20个大行业分类，通过严格的项目审核为创业者把好创业第一道关。时代加盟网旨在为创业者与品牌方直接建立快捷的信息沟通的桥梁！"
        />
        <meta
          name="keyword"
          content="加盟,连锁,创业,投资,招商,代理,商机,开店,找项目,创业项目,品牌加盟,商机网,加盟店,加盟平台,加盟网,时代加盟网"
        />
        <title>
          时代加盟网—连锁品牌招商加盟直聊平台_品牌加盟_严选优质加盟创业项目_加盟头条
        </title>
      </Head>
      {/* <MyHome /> */}
      <HeaderComponent hotProject={hotProject.list} />
      <HomeCategory
        category={category}
        bannerData={banner}
        recommendData={recommendData}
        raidersData={raidersData}
        journalData={journalData}
        categoryAccept={categoryAccept}
        hotProject={hotProject}
        hotCategory={categoryList}
      />
      <MyHome
        brandCategoryData={brandCategoryData}
        recommendArticle={recommendArticle}
        hotProject={projectList.list}
        categoryData={categoryList.categoryList}
      />
      <FooterComponent showImg />
    </div>
  );
}
export async function getServerSideProps(context: {
  query: { page: 1; pageSize: 20 };
}) {
  const getCategory = await fetch('https://api.jm360.net/category/top');
  const category = await getCategory.json();

  const getBanner = await fetch('https://api.jm360.net/banners?position=1');
  const banner = await getBanner.json();

  const getRecommend = await fetch(
    'https://api.jm360.net/article/recommend?pageSize=8&page=1',
  );
  const recommendData = await getRecommend.json();

  const getJournal = await fetch(
    'https://api.jm360.net/articles?pageSize=8&page=1&cid=1',
  );
  const journalData = await getJournal.json();

  const getRaiders = await fetch(
    'https://api.jm360.net/articles?pageSize=8&page=1&cid=2',
  );
  const raidersData = await getRaiders.json();

  const getCategoryList = await fetch('https://api.jm360.net/page/category');
  const categoryList = await getCategoryList.json();

  const getHotProject = await fetch(
    'https://api.jm360.net/project/hot?pageSize=4&page=1',
  );
  const hotProject = await getHotProject.json();

  const getProjectList = await fetch(
    'https://api.jm360.net/projects?pageSize=10&page=1',
  );
  const projectList = await getProjectList.json();

  const categoryData = categoryList.categoryList;

  const getOneData = await fetch(
    `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[0].id}`,
  );
  const oneData = await getOneData.json();

  const getTwoData = await fetch(
    `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[1].id}`,
  );
  const twoData = await getTwoData.json();

  const getThreeData = await fetch(
    `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[2].id}`,
  );
  const threeData = await getThreeData.json();

  const getFourData = await fetch(
    `https://api.jm360.net/project/search?pageSize=4&page=1&bigCategoryId=${categoryData[3].id}`,
  );
  const fourData = await getFourData.json();

  const brandCategoryData = [oneData, twoData, threeData, fourData];

  const getRecommendArticle = await fetch(
    'https://api.jm360.net/article/recommend?pageSize=8&page=1',
  );
  const recommendArticle = await getRecommendArticle.json();

  return {
    props: {
      category,
      banner,
      recommendData,
      journalData,
      raidersData,
      categoryList,
      hotProject,
      // hotCategory,
      brandCategoryData,
      recommendArticle,
      projectList,
    },
  };
}
