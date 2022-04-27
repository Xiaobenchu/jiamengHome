/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Link from 'next/link';
import { useState } from 'react';
import { ArticleBox } from './articleBox';
import { Banner } from './banner';
import { CategoryBox } from './categoryBox';
import { CategoryCenterComponent } from './categoryCenterComponent';
import styles from './styles.module.scss';

interface HomeCategoryProps {
  category?: any;
  bannerData?: any;
  recommendData?: any;
  journalData?: any;
  raidersData?: any;
  categoryAccept: any;
  hotProject: any;
  hotCategory: any;
}

export function HomeCategory(props: HomeCategoryProps) {
  const {
    category,
    bannerData,
    recommendData,
    journalData,
    raidersData,
    categoryAccept,
    hotProject,
    hotCategory,
  } = props;
  const list2 = hotCategory.hotList.slice(0, 7);
  const [categoryIndex, setCategoryIndex] = useState<number>(-1);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const list = [
    {
      name: '全部行业分类',
      path: '/',
    },
    {
      name: '加盟排行',
      path: '/leaderBoard/22',
    },
    {
      name: '创业资讯',
      path: '/newsSpotlight/0',
    },
  ];

  return (
    <>
      <div className={styles.hederCategoryList}>
        {list.map((item, index) => (
          <Link
            href={{
              pathname: item.path,
            }}
            key={index.toString()}
          >
            <a href={item.path}>
              <div
                className={
                  index === 0 ? styles.categoryFirstBox : styles.categoryBox
                }
              >
                <span className={styles.categoryText}>{item.name}</span>
              </div>
            </a>
          </Link>
        ))}
        {list2.map((item: any, index: any) => (
          <a
            href={`categorySearch/${item.id}`}
            title={item.seoTitle}
            aria-label={item.seoKeywords}
          >
            <div key={index.toString()} className={styles.categoryBox}>
              <span className={styles.categoryText}>{item.name}</span>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.centerBox}>
        <div className={styles.categoryContainer}>
          <div
            className={styles.leftBox}
            onMouseOver={() => {
              setIsFocus(true);
            }}
            // onMouseOut={() => {
            //   setCategoryIndex(-1);
            // }}
            onMouseLeave={() => {
              setIsFocus(false);
              setCategoryIndex(-1);
              setIsShow(false);
            }}
          >
            <CategoryBox
              isFocus={isFocus}
              idx={categoryIndex}
              category={category}
              focus={(val) => {
                setCategoryIndex(val);
                setIsShow(true);
              }}
              blur={() => {
                // setIsShow(false);
              }}
            />
            <Banner
              data={bannerData}
              style={!isShow ? styles.banner : styles.bannerHidden}
            />
            <CategoryCenterComponent
              data={categoryAccept}
              categoryIndex={categoryIndex}
              hotProject={hotProject.list}
              focus={() => {
                setIsShow(true);
              }}
              blur={() => {
                // setIsShow(false);
              }}
              style={isShow ? styles.banner : styles.bannerHidden}
            />
          </div>
          <ArticleBox
            recommendData={recommendData.list}
            journalData={journalData.list}
            raidersData={raidersData.list}
          />
        </div>
      </div>
    </>
  );
}
