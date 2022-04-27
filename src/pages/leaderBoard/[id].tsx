import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { HeaderComponent } from '@/component/headerComponent';
import { LeaderBoardCategory } from '@/component/leaderBoardCategory';
import { LeaderBoardProject } from '@/component/LeaderBoardProject';
import { ListProjectInterface } from '@/jmlib/types';
import { FooterComponent } from '@/component/footerComponent';
import styles from '../../styles/leaderBoard.module.scss';

interface LeaderBoardProps {
  data?: any;
  discoverDetail: any;
  cid: any;
  discoverList: any;
}

export default function LeaderBoard(props: LeaderBoardProps) {
  const { data, discoverDetail, cid, discoverList } = props;

  const [projectList, setProjectList] = useState<ListProjectInterface[]>([]);
  useEffect(() => {
    setProjectList(data.list);
  }, [data]);
  return (
    <>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta name="referrer" content="no-referrer" />
        <meta name="keyword" content={discoverDetail.seoKeywords} />
        <meta name="Description" content={discoverDetail.seoDescription} />
        <title>{discoverDetail.seoKeywords}</title>
      </Head>
      <HeaderComponent isProject />
      <div className={styles.container}>
        <div className={styles.box}>
          <img
            className={styles.img}
            src="/images/leaderBrand/leader_banner.jpg"
          />
          <LeaderBoardCategory data={discoverList.list} cid={cid} />
        </div>
        <div className={styles.projectBox}>
          {projectList.map((item, index) => (
            <LeaderBoardProject data={item} key={index.toString()} />
          ))}
        </div>
      </div>
      <FooterComponent showImg />
    </>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const res = await fetch(
    `https://api.jm360.net/discover/project/${context.query.id}`,
  );
  const data = await res.json();

  const getDiscover = await fetch(
    `https://api.jm360.net/discover/discover_list/${context.query.id}`,
  );
  const discoverDetail = await getDiscover.json();

  const getDiscoverList = await fetch(
    'https://api.jm360.net/discover/list?type=3',
  );
  const discoverList = await getDiscoverList.json();

  const cid = parseInt(context.query.id, 10);
  return {
    props: { data, discoverDetail, cid, discoverList },
  };
}
