import { ArticleInterface } from '@/jmlib/types';
import styles from './styles.module.css';

type ArticlesInfoProps = {
  data: ArticleInterface;
};

export function NewsComponent(props: ArticlesInfoProps) {
  const { data } = props;
  return (
    <>
      <a href={`../newsDetails?id=${data.id}`} className={styles.jump}>
        <div className={styles.box}>
          {data.thumb ? (
            <img className={styles.img} src={data.thumb} />
          ) : (
            <img className={styles.img} src="/static/images/news/thumb.jpg" />
          )}
          <p className={styles.title}>{data.title}</p>

          <p className={styles.brief}>{data?.brief}</p>
        </div>
      </a>
    </>
  );
}
