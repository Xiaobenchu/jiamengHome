import Head from 'next/head';
import styles from '../../styles/contactUs.module.css';
import { HeaderComponent } from '../../component/headerComponent/index';
import { FooterComponent } from '../../component/footerComponent';

const list = [
  {
    index: 0,
    text: '创业加盟热线',
    phone: '15219457680',
    img: '/images/contactUs/contact_3.png',
  },
  {
    index: 1,
    text: '品牌招商热线',
    phone: '13424306126',
    img: '/images/contactUs/contact_1.png',
  },
  {
    index: 2,
    text: '联系邮箱',
    phone: 'sw@jm360.net',
    img: '/images/contactUs/contact_2.png',
  },
];

export default function ContactUs() {
  return (
    <>
      <Head>
        <meta name="baidu-site-verification" content="code-Vw6MQwYwzw" />
        <meta
          name="Description"
          content="时代加盟网，中国品牌招商加盟综合服务平台。严选连锁品牌，汇集热门商机，通过智能匹配和一键直聊，让创业者与品牌方直接联系。覆盖餐饮加盟、教育加盟、美容加盟、酒店加盟、干洗加盟、服装加盟等20个大行业分类，通过严格的项目审核为创业者把好创业第一道关。时代加盟网旨在为创业者与品牌方直接建立快捷的信息沟通的桥梁！"
        />
        <meta
          name="keywords"
          content="加盟,连锁,创业,投资,招商,代理,商机,开店,找项目,创业项目,品牌加盟,商机网,加盟店,加盟平台,加盟网,时代加盟网"
        />
        <title>
          时代加盟网—连锁品牌招商加盟直聊平台_品牌加盟_严选优质加盟创业项目
        </title>
      </Head>
      <HeaderComponent />
      <img src="/images/contactUs/contact_bg.jpg" className={styles.bg} />
      <div className={styles.contentBox}>
        <div className={styles.centerBox}>
          {list.map((item) => (
            <div className={styles.box} key={item.index}>
              <img src={item.img} className={styles.img} />
              <p className={styles.text}>{item.text}</p>
              <p className={styles.phone}>{item.phone}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
