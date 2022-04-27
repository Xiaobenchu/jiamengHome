import { ArticleCategoryInterface } from '@/jmlib/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface NewsCategoryInterface {
  data: ArticleCategoryInterface[];
  idx: number;
}

export default function NewsCategory(props: NewsCategoryInterface) {
  const { data, idx } = props;
  const list: ArticleCategoryInterface[] = [];
  data.forEach((item) => {
    if (item.displayStatus === 1) {
      list.push(item);
    }
  });
  list.splice(0, 0, {
    id: 0,
    name: '加盟头条',
    parentId: 0,
    icon: '',
    displayOrder: 0,
    displayStatus: 1,
    seoTitle: '',
    seoKeywords: '',
    seoDescription: '',
    createdAt: '2021-04-25T06:54:11.291Z',
    updatedAt: '2021-06-23T01:56:08.000Z',
  });
  const [checked, setChecked] = useState(0);
  useEffect(() => {
    setChecked(idx);
  }, [idx]);
  return (
    <>
      <div className={styles.container}>
        {list.map((item, index) => (
          <Link
            href={{
              pathname: '/newsSpotlight/[id]',
              query: { id: item.id },
            }}
            key={index.toString()}
          >
            <a
              href={`/newsSpotlight/${item.id}`}
              title={item.seoTitle}
              aria-label={item.seoKeywords}
            >
              <div
                className={styles.box}
                key={index.toString()}
                onPointerUp={() => {
                  setChecked(index);
                }}
              >
                <span
                  className={styles.title}
                  style={
                    index === checked
                      ? { color: '#FA2B1E' }
                      : { color: '#999999' }
                  }
                >
                  {item.name}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
