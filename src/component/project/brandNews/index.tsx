import { ArticleInterface } from '@/jmlib/types';
import { getHotArticles } from '@/services/articles';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface BrandNewsProps {
  data: any;
}

export function BrandNews(props: BrandNewsProps) {
  const { data } = props;

  // 品牌资讯
  const [hotArticles, setHotArticles] = useState<ArticleInterface[]>([]);

  // const franchiseMode = useRef([]);
  useEffect(() => {
    const getHotArticlesList = async () => {
      try {
        await getHotArticles({
          pageSize: 2,
          userId: data?.user.id,
        }).then((res) => {
          setHotArticles(res.list);
        });
      } catch (e) {
        console.log('BrandNews error');
      }
    };
    // if (data?.franchiseMode.length) {
    //   data?.franchiseMode.forEach((item: any) => {
    //     franchiseMode.current.push(item);
    //   });
    // }
    getHotArticlesList();
  }, [data?.brandStartTime]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.box}>
      {hotArticles.length ? (
        <div className={styles.BrandNews}>
          <span>品牌资讯</span>
          {hotArticles.map((item, i) => {
            return (
              <div
                className={`${i === 0 ? styles.newsBox : ''}`}
                key={item.thumb}
              >
                <span className={styles.title}>{item.title}</span>
                <span className={styles.brief}>{item.brief}</span>
                <img src={item.thumb} className={styles.thumb} />
                <div className={styles.authorBox}>
                  <img src={item.authorAvatar} />
                  <span>{item.author}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
