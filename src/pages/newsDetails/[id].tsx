import { ArticleInterface } from '@/jmlib/types';
// import { getArticlesDetails } from '@/services/login';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/newsDetails.module.css';
import { HeaderComponent } from '../../component/headerComponent/index';
import { FooterComponent } from '../../component/footerComponent';

interface NewsDetailsInterface {
  data: ArticleInterface;
}

export default function NewsDetails(props: NewsDetailsInterface) {
  const { data } = props;

  const [article, setArticle] = useState<ArticleInterface>();
  useEffect(() => {
    setArticle(data);
  }, [data]);

  return (
    <div className={styles.box}>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta name="referrer" content="no-referrer" />
        <meta name="keyword" content="时代加盟网" />
        <title>时代加盟_时代加盟网官网_创业直聊</title>
      </Head>
      <HeaderComponent />
      <div className={styles.titleBox}>
        <p className={styles.name}>{article?.title}</p>
        <p className={styles.timeText}>
          发布时间:{dayjs(article?.createdAt).format('YYYY-MM-DD')}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: article ? article?.content : '',
        }}
        className={styles.contentBox}
      />
      <FooterComponent showImg />
    </div>
  );
}
export async function getServerSideProps(context: { query: { id: any } }) {
  const res = await fetch(`https://api.jm360.net/articles/${context.query.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
