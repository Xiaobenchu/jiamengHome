/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { CategoryInterface } from '@/jmlib/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface LeaderBoardCategoryProps {
  data: CategoryInterface[];
  cid: number;
}

export function LeaderBoardCategory(props: LeaderBoardCategoryProps) {
  const { data, cid } = props;
  const list: any = [];
  data.forEach((item) => list.push({ ...item, index: item.id }));
  const [expand, setExpand] = useState<boolean>(false);
  const [checked, setChecked] = useState<number>(cid);
  useEffect(() => {
    setChecked(cid);
  }, [cid]);
  return (
    <>
      <div className={styles.container}>
        <span className={styles.label}>行业分类：</span>
        <div className={expand ? styles.centerBox : styles.centerBoxHidden}>
          {list.map((item: any, index: any) => (
            <Link
              href={{
                pathname: '/leaderBoard/[id]',
                query: { id: item.id },
              }}
              key={index.toString()}
              scroll={false}
            >
              <a>
                <div
                  className={
                    checked === item.index ? styles.checkedBox : styles.box
                  }
                  onPointerUp={() => {
                    setChecked(item.index);
                  }}
                >
                  <span className={styles.text}>{item.name}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div
          className={styles.allBox}
          onPointerUp={() => {
            setExpand(!expand);
          }}
        >
          <span className={styles.all}>全部</span>
          <span className={`${styles.icon} iconfont icondown`} />
        </div>
      </div>
    </>
  );
}
