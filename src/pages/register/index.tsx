import { useState } from 'react';
// import { sendCode } from '@/services/login';
import Head from 'next/head';
import { sendCode } from '@/services/auth';
import { FooterComponent } from '../../component/footerComponent';
import styles from '../../styles/register.module.css';

const iconList = [
  `${styles.checkoutIcon} iconfont  iconshouye-kuang`,
  `${styles.checkoutSelIcon} iconfont  iconshouye-gouxuan`,
];

export default function Register() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval>>();
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [role, setRole] = useState<boolean>();
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const initTimer = () => {
    setCount(60);
    const getTime = setInterval(() => {
      if (count < 0 && timer) {
        clearInterval(timer);
        setTimer(undefined);
      }
      setCount((v) => v - 1);
    }, 1000);
    setTimer(getTime);
  };

  const GetCodeFn = () => {
    if (mobile === '' || mobile.length < 11) {
      window.alert('请输入正确的11位数字手机号码');
      return;
    }
    if (role) {
      sendCode({ mobile, type: 'register' }).then(() => {
        initTimer();
      });
      return;
    }
    sendCode({ mobile, type: 'register' }).then(() => {
      initTimer();
    });
  };

  const submit = () => {
    if (!isAgree) {
      alert('请阅读并接受《用户服务协议》和《个人保护政策》');
      return;
    }
    if (mobile === '' || mobile.length < 11) {
      alert('请输入正确的11位数字手机号码');
    }
  };
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
      <div className={styles.box}>
        <div className={styles.headerBox}>
          <div className={styles.logoBox}>
            <img src="/images/login/logo.png" className={styles.logo} />
            <p className={styles.logoText}>新会员免费注册</p>
          </div>
          <div className={styles.headerLoginBox}>
            <span
              className={`${styles.headerIcon} iconfont  icon2-shenqing-dianhua`}
            />
            <p className={styles.headerPhone}>免费咨询：13424306126</p>
            <p
              className={styles.headerRun}
              onPointerUp={() => {
                window.location.href = '/';
              }}
            >
              返回首页
            </p>
            <div
              className={styles.headerBtn}
              onPointerUp={() => {
                window.location.href = '/login';
              }}
            >
              <p className={styles.headerBtnText}>登入</p>
            </div>
          </div>
        </div>
        <div className={styles.registerBox}>
          <div className={styles.chooseBox}>
            <div
              className={styles.chooseBtn}
              onPointerUp={() => {
                setRole(false);
              }}
            >
              <p className={!role ? styles.chooseText : styles.chooseSleText}>
                我要创业
              </p>
              <div
                className={styles.line}
                style={
                  !role ? { background: '#f52e15' } : { background: '#fff' }
                }
              />
            </div>
            <div
              className={styles.chooseBtn}
              onPointerUp={() => {
                setRole(true);
              }}
            >
              <p className={role ? styles.chooseText : styles.chooseSleText}>
                我要招商
              </p>
              <div
                className={styles.line}
                style={
                  role ? { background: '#f52e15' } : { background: '#fff' }
                }
              />
            </div>
          </div>

          <div className={styles.phoneInputBox}>
            <div className={styles.phoneInputIconBox}>
              <span
                className={`${styles.phoneIcon} iconfont  iconshouye-shoujihao`}
              />
              <p className={styles.phoneInputTip}>+86</p>
            </div>
            <input
              maxLength={11}
              className={styles.phoneInput}
              placeholder="手机号"
              onChange={(val) => {
                setMobile(val.target.value);
              }}
            />
          </div>

          <div className={styles.codeInputBox}>
            <p
              className={styles.code}
              onPointerUp={() => {
                GetCodeFn();
              }}
            >
              {count < 1 ? '获取验证码' : count}
            </p>

            <div className={styles.codeInputIconBox}>
              <span
                className={`${styles.codeIcon} iconfont  iconwode-suozhu`}
              />
            </div>
            <input
              maxLength={4}
              className={styles.codeInput}
              placeholder="验证码"
              onChange={(val) => {
                setCode(val.target.value);
              }}
            />
          </div>

          <div className={styles.btn}>
            <p className={styles.btnTitle}>注册</p>
          </div>

          <div className={styles.checkoutBox}>
            <span
              className={isAgree ? iconList[1] : iconList[0]}
              onPointerUp={() => {
                setIsAgree(!isAgree);
              }}
            />

            <p className={styles.protocolText}>
              同意时代加盟网
              <span
                className={styles.userProtocol}
                onPointerUp={() => {
                  window.location.href = '/termsService';
                }}
              >
                《用户协议》
              </span>
              <span
                className={styles.privacyProtocol}
                onPointerUp={() => {
                  window.location.href = '/privacyPolicy';
                }}
              >
                《隐私政策》
              </span>
            </p>
          </div>
        </div>
      </div>
      <FooterComponent showImg />
    </>
  );
}
