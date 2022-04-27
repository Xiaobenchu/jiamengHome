import Head from 'next/head';
import styles from '../../styles/about.module.css';
import { HeaderComponent } from '../../component/headerComponent/index';
import { FooterComponent } from '../../component/footerComponent';

const list = [
  {
    index: 0,
    title: '与BOSS直聊，沟通更高效',
    text:
      '创业者与品牌方BOSS直接在线沟通，绕开中间环节，提高沟通效率，避免资料泄露导致的骚扰。',
  },
  {
    index: 1,
    title: '海量创业品牌，更多加盟选择',
    text:
      '全面涵盖餐饮、教育、美容、健康、体育、酒店、家居、零售、生活服务、汽车、家居、美妆、珠宝等30多种连锁品牌，满足创业者个性化的创业开店需求。',
  },
  {
    index: 2,
    title: '严选优质品牌，虚假品牌零容忍',
    text:
      '通过1+1机制，严格挑选优质、靠谱，真实的加盟品牌，对不成熟的公司、空壳公司、虚假宣传的公司零容忍，为创业者降低创业风险。',
  },
  {
    index: 3,
    title: '智能匹配，品牌推荐更精准',
    text:
      '通过大数据驱动和AI智能匹配，为创业者精准推荐优质品牌；通过一二级分类和精准搜索，让创业者快速找到合适的的品牌，大大提高招商加盟效率。',
  },
  {
    index: 4,
    title: '个性化专栏，品牌展示更丰富',
    text:
      '通过十大品牌、人气榜区、优质推荐、特色加盟、小本投资、大牌专区等专栏，品牌的展示更加丰富；通过视频、项目图片、主营产品、经营方式、销售网络等多种方式，品牌的展示更全面',
  },
];

const imgList = [
  {
    index: 0,
    img: '/images/about/about_bg1.jpg',
    title: '找项目',
    text:
      '在时代加盟网APP首页及分类页面，有海量综合类优质项目，涵盖餐饮、教育、美容、母婴、零售、汽车、家居、服饰、五金等行业，可通过搜索、筛选的形式快速查看感兴趣的项目。点击项目详情，可以360°考察品牌状况。在项目详情底栏，可点击【申请加盟】提交加盟意向，也可点击【立即沟通】立即与品牌方进行沟通。',
  },
  {
    index: 1,
    img: '/images/about/about_bg2.jpg',
    title: '交创友',
    text:
      '在时代加盟网APP首页点击【人脉】，进入人脉页。在人脉页面，可一键关注精准匹配的创业者，也可以通过同乡圈、校友圈、同行圈查找自己感兴趣的创业者，进行沟通，结交好友。',
  },
  {
    index: 2,
    img: '/images/about/about_bg3.jpg',
    title: '政策补贴',
    text:
      '时代加盟网联合优质的品牌方，联合推出创业补贴活动，为创业者提供创业补贴，以降低创业成本。在时代加盟网APP首页点击【创业补贴】，进入政策补贴页，可以领取创业补贴。',
  },
  {
    index: 3,
    img: '/images/about/about_bg4.jpg',
    title: '学习成长',
    text:
      '在时代加盟网会定期邀请行业专家到平台开战涵盖管理、营销和运营等方面的课堂、在线访谈节目等，以帮助创业者学习成长。',
  },
  {
    index: 4,
    img: '/images/about/about_bg5.jpg',
    title: '加盟宝典',
    text:
      '在时代加盟网APP首页点击【加盟宝典】，进入加盟宝典。加盟宝典围绕“开店做生意”，结合大数据精准推送，为企业家提供经营日记、开店攻略、消费时代、行业洞察、科技前沿、全球热点等优质图文、视频内容，助力创业者管理和商业决策。',
  },
  {
    index: 5,
    img: '/images/about/about_bg6.jpg',
    title: '精选服务',
    text:
      '通过1对1创业分析师，时代加盟网随时向创业者答疑解惑，提供连锁加盟、分销代理，开店创业等方面的专业建议；通过1对1专业服务，时代加盟网随时向品牌方提供管理、营销和运营方面的服务',
  },
];

export default function AboutUs() {
  return (
    <>
      <div>
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
            时代加盟网—连锁品牌招商加盟直聊平台_品牌加盟排行榜_严选优质加盟创业项目
          </title>
        </Head>
        <HeaderComponent />
        <img src="/images/about/about_1.jpg" className={styles.img} />
        <div className={styles.box}>
          <div className={styles.contentBox}>
            <div className={styles.tipBox}>
              <p className={styles.tip}>公司简介</p>
              <div className={styles.tipLine} />
            </div>
            <p className={styles.text}>
              时代加盟网是全球首创的互联网“直盟”模式的招商加盟平台，隶属于九维网络（深圳）有限公司，公司旗下拥有时代加盟网、SaaS工具和数字营销服务三个产品。总服务用户数超过3000万，致力于用科技和大数据解决招商加盟领域的管理和营销问题。
            </p>
            <p className={styles.text}>
              时代加盟网严选优质项目，为创业者提供真实、靠谱的创业项目！产品的核心是“精准推荐+一键直聊”，通过将即时聊天功能引入招商加盟场景，让创业者和品牌方直接沟通，绕过平台方中转环节，打破人为设置的沟通壁障，提升沟通效率。时代加盟网应用人工智能和大数据等前沿技术，让创业者与品牌方精准触达对方，提升了加盟效率，为创业者降低创业风险。
            </p>
          </div>
          <img src="/images/about/about_2.jpg" className={styles.bg2} />
        </div>
        <div className={styles.box2}>
          <div className={styles.contentBox}>
            <div className={styles.tipBox}>
              <p className={styles.tip}>平台介绍</p>
              <div className={styles.tipLine} />
            </div>
            <p className={styles.text}>
              时代加盟网是全球首创的互联网“直盟”模式的招商加盟平台，隶属于九维网络（深圳）有限公司，公司旗下拥有时代加盟网、SaaS工具和数字营销服务三个产品。总服务用户数超过3000万，致力于用科技和大数据解决招商加盟领域的管理和营销问题。
            </p>
            <p className={styles.text}>
              时代加盟网严选优质项目，为创业者提供真实、靠谱的创业项目！产品的核心是“精准推荐+一键直聊”，通过将即时聊天功能引入招商加盟场景，让创业者和品牌方直接沟通，绕过平台方中转环节，打破人为设置的沟通壁障，提升沟通效率。时代加盟网应用人工智能和大数据等前沿技术，让创业者与品牌方精准触达对方，提升了加盟效率，为创业者降低创业风险。
            </p>
            <p className={styles.text}>
              时代加盟网依托于自己深厚的行业积累，通过1对1专业服务，打造强大的招商加盟服务体系，帮助品牌方以更低的成本、更高的效率开发市场，推进渠道布局。
            </p>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.contentBox3}>
            <div className={styles.leftBox}>
              <div className={styles.tipBox2}>
                <p className={styles.tip}>平台介绍</p>
                <div className={styles.tipLine} />
              </div>

              {list.map((item) => (
                <div className={styles.textBox} key={item.index}>
                  <p className={styles.leftTitle}>{item.title}</p>
                  <p className={styles.leftTip}>{item.text}</p>
                </div>
              ))}
            </div>
            <img src="/images/about/about_4.jpg" className={styles.bg3} />
          </div>
        </div>
        <div className={styles.box4}>
          <div className={styles.contentBox}>
            <div className={styles.tipBox}>
              <p className={styles.tip}>平台功能</p>
              <div className={styles.tipLine} />
            </div>
            <p className={styles.box4Text}>
              时代加盟网APP主要模块分别是：找项目、交创友、创业补贴、学习成长、创业资讯、精选服务等。
            </p>
            <div className={styles.bottomBox}>
              {imgList.map((item) => (
                <div
                  // className={
                  //   item.index === 1 || item.index === 4
                  //     ? styles.imgMaxBox
                  //     : styles.imgBox
                  // }
                  className={styles.imgBox}
                  key={item.index}
                >
                  <img src={item.img} className={styles.bottomImg} />
                  <p className={styles.bottomTitle}>{item.title}</p>
                  <p className={styles.bottomText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
