// import { useState } from 'react';
import styles from './styles.module.css';

interface FavoriteItemProps {
  data: any;
}

export function FavoriteItem(props: FavoriteItemProps) {
  const { data } = props;

  //   const [show, setShow] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.FavoriteItem}>
        <span>猜你喜欢</span>
        <div>
          {data.length &&
            data.map((item: any) => {
              return (
                <div className={styles.itemBox} key={item.thumb}>
                  <img src={item.thumb} className={styles.thumb} />
                  <div className={styles.rightBox}>
                    <span className={styles.title}>{item.title} &gt;</span>
                    {item.star >= 3 ? (
                      <div className={styles.star}>
                        <span>{item.star}</span>星认证
                      </div>
                    ) : null}
                    <span className={styles.category}>
                      {item.category.name}
                    </span>
                    <span className={styles.money}>
                      {item.minCost}-{item.maxCost}万
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
