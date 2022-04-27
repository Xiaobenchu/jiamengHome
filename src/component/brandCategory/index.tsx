// import { useState } from 'react';
import { BrandItem } from './brandItem';
import styles from './styles.module.css';

interface BrandCategoryProps {
  data: any;
  category: any;
}

export function BrandCategory(props: BrandCategoryProps) {
  const { data, category } = props;

  // const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.brandCategory}>
        <div className={styles.topCategoryBox}>
          <div>
            <span>
              <a href={`/categorySearch/${category.id}`}>{category.name}</a>
            </span>
            {category.children &&
              category.children.slice(0, 5).map((item: any) => {
                return (
                  <span>
                    <a href={`/categorySearch/${item.id}`}>{item.name}</a>
                  </span>
                );
              })}
          </div>
          <span className={styles.moreCategory}>
            <a href={`/categorySearch/${category.id}`}>更多项目&gt;</a>
          </span>
        </div>
        <div className={styles.brandItemBox}>
          {data.map((item: any) => (
            <BrandItem key={item.thumb} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
