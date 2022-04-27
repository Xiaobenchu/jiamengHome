import { FooterComponent } from '@/component/footerComponent';
import { HeaderComponent } from '@/component/headerComponent';
import { ApplyProjectOverlay } from '@/component/project/applyProjectOverlay';
import { BrandNews } from '@/component/project/brandNews';
import { BrandVideo } from '@/component/project/brandVideo';
import { FavoriteItem } from '@/component/project/favoriteItem';
import { ProjectEvaluation } from '@/component/project/ProjectEvaluation';
import { ProjectInfo } from '@/component/project/ProjectInfo';
import { ProjectWeb } from '@/component/project/projectWeb';
import { ProjectInterface } from '@/jmlib/types';
import { getCategoryById } from '@/services/category';
import { recommendProject } from '@/services/project';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import styles from '../../styles/project/project.module.css';

interface ProjectProps {
  data: any;
}

export default function Project(props: ProjectProps) {
  const { data } = props;

  // 弹窗
  const [show, setShow] = useState(false);
  const [leftBtn, setLeftBtn] = useState(false);

  const [bigCategoryName, setBigCategoryName] = useState('');

  useEffect(() => {
    if (data.category.parentId) {
      getCategoryById(data.category.parentId).then((res) => {
        setBigCategoryName(res.name);
      });
    }
  }, []);

  const [recommendList, setRecommendList] = useState<ProjectInterface[]>([]);
  // 获取猜您喜欢的项目
  const getRecommend = async (projectId: any) => {
    try {
      await recommendProject(projectId, {
        pageSize: 4,
        page: 1,
      }).then((res) => {
        setRecommendList(res.list);
      });
    } catch (e) {
      console.log('getRecommend error');
    }
  };

  useEffect(() => {
    getRecommend(data.id);
  }, [data.id]);

  console.log(data, 'project');

  return (
    <div className={styles.box}>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta name="referrer" content="no-referrer" />
        <meta
          name="Description"
          content={
            data && data.seoDescription
              ? data.seoDescription
              : '时代加盟网，中国品牌招商加盟综合服务平台。严选连锁品牌，汇集热门商机，通过智能匹配和一键直聊，让创业者与品牌方直接联系。覆盖餐饮加盟、教育加盟、美容加盟、酒店加盟、干洗加盟、服装加盟等20个大行业分类，通过严格的项目审核为创业者把好创业第一道关。时代加盟网旨在为创业者与品牌方直接建立快捷的信息沟通的桥梁！'
          }
        />
        <meta
          name="keywords"
          content={
            data && data.seoKeywords
              ? data.seoKeywords
              : '加盟,连锁,创业,投资,招商,代理,商机,开店,找项目,创业项目,品牌加盟,商机网,加盟店,加盟平台,加盟网,时代加盟网'
          }
        />
        <title>
          {data && data.seoTitle
            ? data.seoTitle
            : '时代加盟网—连锁品牌招商加盟直聊平台_品牌加盟排行榜_严选优质加盟创业项目'}
        </title>
      </Head>
      {show ? (
        <ApplyProjectOverlay
          data={data}
          close={() => {
            setShow(false);
          }}
          left={leftBtn}
        />
      ) : null}
      <HeaderComponent isProject />
      <div className={styles.topBox}>
        <ProjectInfo
          data={data}
          bigCategoryName={bigCategoryName}
          onClickBtn={(e) => {
            setLeftBtn(e);
            setShow(true);
          }}
        />
      </div>
      <div>
        <ProjectWeb data={data} />
      </div>
      <div>
        <ProjectEvaluation data={data} />
      </div>
      <div>
        <BrandVideo data={data} />
      </div>
      <div>
        <BrandNews data={data} />
      </div>
      <div>
        {recommendList.length ? <FavoriteItem data={recommendList} /> : null}
      </div>
      <div className={styles.lastTxt}>
        <p className={styles.lastTitle}>时代加盟网温馨提示:</p>
        <p>
          ·以上展示的项目信息均由郑州厚德餐饮管理有限公司发布，内容的真实性、准确性和合法性由郑州厚德餐饮管理有限公司负责。
        </p>
        <p>
          ·投资有风险，选择需谨慎。本页面内容仅供参考，建议您在投资前与企业核实确认加盟情况，务必多咨询、多考察，以企业确认为准，以便降低投资风险。
        </p>
        <p>
          ·时代加盟网网站仅进行信息展示，如您发现页面有任何违法或侵权信息，请在意见反馈中提供相关材料，我们会及时核查处理并回复。
        </p>
      </div>
      <FooterComponent showImg />
    </div>
  );
}

export async function getServerSideProps(context: {
  query: { projectId: any };
}) {
  const res = await fetch(
    `https://api.jm360.net/projects/${context.query.projectId}`,
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
