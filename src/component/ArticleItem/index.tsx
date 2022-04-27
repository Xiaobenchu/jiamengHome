import dayjs from 'dayjs';

// import { useState } from 'react';

import styles from './styles.module.css';

interface ArticleItemProps {
  data: any;
}

export function ArticleItem(props: ArticleItemProps) {
  const { data } = props;

  // const [show, setShow] = useState(false);
  return (
    <>
      <a href={`/newsDetails/${data.id}`}>
        <div className={styles.ArticleItem}>
          {data.thumb ? (
            <img src={data.thumb} className={styles.img} />
          ) : (
            <img src="/images/home/loading_home.png" className={styles.img} />
          )}
          {/* <div className={styles.contentBox}> */}
          <span className={styles.title}>{data.title}</span>
          <span className={styles.context}>{data.brief}</span>
          <span className={styles.talk}>
            {data.author === '未知' ? '时代加盟网' : data.author}
          </span>
          <div className={styles.timeBox}>
            <span>{dayjs(data.publicTime).format('YYYY-MM-DD')}</span>
            <span>
              {data.viewCount}M
              {/* <span className={`iconfont icon7zhuyingxiangmu`}> </span> */}
            </span>
          </div>
          {/* </div> */}
        </div>
      </a>
    </>
  );
}
