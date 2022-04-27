import { ArticleInterface } from '@/jmlib/types';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

interface ArticleBoxProps {
  recommendData: ArticleInterface[];
  journalData: ArticleInterface[];
  raidersData: ArticleInterface[];
}

export function ArticleBox(props: ArticleBoxProps) {
  const { recommendData, journalData, raidersData } = props;

  const [idx, setIdx] = useState<number>(0);
  const list = ['头条', '日记', '攻略'];
  const colorList = ['#FA2B1E', '#EE4F02', '#FA871E'];

  return (
    <>
      <div className={styles.box}>
        <div className={styles.headerBox}>
          {list.map((item, index) => (
            <div
              className={styles.header}
              key={index.toString()}
              onPointerUp={() => {
                setIdx(index);
              }}
            >
              <span
                className={styles.headerText}
                style={
                  index === idx ? { color: '#FA2B1E' } : { color: '#666666' }
                }
              >
                {item}
              </span>
              <div
                className={styles.line}
                style={
                  idx === index
                    ? { background: '#FA2B1E' }
                    : { background: '#ffffff' }
                }
              />
            </div>
          ))}
        </div>
        <div className={idx === 0 ? styles.articleBox : styles.articleNoneBox}>
          {recommendData.map((item, index) => (
            <Link
              href={{
                pathname: '/newsDetails/[id]',
                query: { id: item.id },
              }}
              key={index.toString()}
            >
              <a href={`/newsDetails/${item.id}`}>
                <div className={styles.articleInfo} key={index.toString()}>
                  <div
                    className={styles.rankBox}
                    style={
                      index < 2
                        ? { background: `${colorList[index]}` }
                        : { background: `${colorList[2]}` }
                    }
                  >
                    <span className={styles.rank}>{index + 1}</span>
                  </div>
                  <span className={styles.name}>{item.title}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className={idx === 1 ? styles.articleBox : styles.articleNoneBox}>
          {journalData.map((item, index) => (
            <Link
              href={{
                pathname: '/newsDetails/[id]',
                query: { id: item.id },
              }}
              key={index.toString()}
            >
              <a href={`/newsDetails/${item.id}`}>
                <div className={styles.articleInfo}>
                  <div
                    className={styles.rankBox}
                    style={
                      index < 2
                        ? { background: `${colorList[index]}` }
                        : { background: `${colorList[2]}` }
                    }
                  >
                    <span className={styles.rank}>{index + 1}</span>
                  </div>
                  <span className={styles.name}>{item.title}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className={idx === 2 ? styles.articleBox : styles.articleNoneBox}>
          {raidersData.map((item, index) => (
            <Link
              href={{
                pathname: '/newsDetails/[id]',
                query: { id: item.id },
              }}
              key={index.toString()}
            >
              <a href={`/newsDetails/${item.id}`}>
                <div className={styles.articleInfo}>
                  <div
                    className={styles.rankBox}
                    style={
                      index < 2
                        ? { background: `${colorList[index]}` }
                        : { background: `${colorList[2]}` }
                    }
                  >
                    <span className={styles.rank}>{index + 1}</span>
                  </div>
                  <span className={styles.name}>{item.title}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
