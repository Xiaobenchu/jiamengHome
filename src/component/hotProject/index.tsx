// import { useState } from 'react';
import styles from './styles.module.css';

interface HotProjectProps {
  data: any;
}

export function HotProject(props: HotProjectProps) {
  const { data } = props;

  // const [show, setShow] = useState(false);
  return (
    <a href={`/project/${data.id}`}>
      <div className={styles.HotProjectBox}>
        <img src={data.thumb} className={styles.imgBox} />
        <div className={styles.hotTxtBox}>
          <div className={styles.hotTitleBox}>
            <span>{data.name}</span>
            {data.star >= 3 ? (
              <div className={styles.star}>{data.star}星认证</div>
            ) : null}
          </div>
          <div className={styles.hotTagBox}>
            {data.feature.map((item: any) => {
              return <span>{item}</span>;
            })}
          </div>
          <p>招商地区： 全国</p>
          <p>所属行业： {data.category.name}</p>
          <p>参考门店总数： {data.franchiseNumber + data.directNumber}</p>
          <p>
            投资金额：{' '}
            <span>
              {data.minCost}-{data.maxCost}
            </span>
            万
          </p>
        </div>
      </div>
    </a>
  );
}
