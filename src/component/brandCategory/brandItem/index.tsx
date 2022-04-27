// import { useState } from 'react';
import styles from './styles.module.css';

interface BrandItemProps {
  data: any;
}

export function BrandItem(props: BrandItemProps) {
  const { data } = props;

  //   const [show, setShow] = useState(false);
  return (
    <a href={`/project/${data.id}`}>
      <div className={styles.BrandItem}>
        <img src={data.thumb} className={styles.img} />
        <span className={styles.name}>{data.name}</span>
        <div className={styles.numBox}>
          <span>
            <span className={styles.num}>
              {data.minCost}-{data.maxCost}
            </span>
            万
          </span>
          {data.star >= 3 ? (
            <div className={styles.star}>{data.star}星认证</div>
          ) : null}
        </div>
      </div>
    </a>
  );
}
