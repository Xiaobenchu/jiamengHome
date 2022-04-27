import Head from 'next/head';
import { useEffect, useState } from 'react';
import { SettledInput } from '@/component/settledInput';
import { HeaderComponent } from '@/component/headerComponent';
import { FooterComponent } from '@/component/footerComponent';
import { companyJoin } from '@/services/companyJoin';
import { MsgOverlay } from '@/component/msgOverlay';
import { sendCode } from '@/services/auth';
import styles from '../../styles/settledPage.module.scss';

// interface SettledPageInterface {
//   data: any;
// }

export default function SettledPage() {
  const [brand, setBrand] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [errMsg, setErrMsg] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const toggleOverlay = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      setSuccess(false);
    }, 1500);
  };
  const join = async () => {
    try {
      const res = await companyJoin({
        mobile: phone,
        companyName: company,
        projectName: brand,
        contactor: contact,
        code,
      }).then((res1) => {
        setSuccess(true);
        setErrMsg('申请入驻成功');
        setPhone('');
        setCompany('');
        setBrand('');
        setContact('');
        setCode('');
        toggleOverlay();
        setTimeout(() => {
          window.location.href = '/';
        }, 1600);
        console.log(res1);
      });
      console.log(res);
    } catch (e) {
      console.log('login error', e.code, e);
      if (parseInt(e.code, 10) === 400) {
        setSuccess(false);
        setErrMsg('验证码错误或者已过期');
        toggleOverlay();
      }
    }
  };
  const submit = () => {
    if (!company) {
      setErrMsg('请填写营业执照上的公司名称');
      toggleOverlay();
      return;
    }
    if (!brand) {
      setErrMsg('请填写品牌名称');
      toggleOverlay();
      return;
    }
    if (phone.length < 11 || phone.length > 11) {
      setErrMsg('请填写11位数字的手机号码');
      toggleOverlay();
      return;
    }
    if (code.length < 4) {
      setErrMsg('请输入完整的验证码');
      toggleOverlay();
      return;
    }
    if (!contact) {
      setErrMsg('请填写联系人');
      toggleOverlay();
      return;
    }

    join();
  };

  const handleSendCode = async () => {
    try {
      const res = await sendCode({
        mobile: phone,
        type: 'company_join',
      });
      // initTimer();
      console.log('res', res);
    } catch (e) {
      console.log('login error', e.code);
      // setLoginError('发送验证码失败');
      toggleOverlay();
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent isProject />
      <MsgOverlay
        visible={isVisible}
        onPress={() => {
          setIsVisible(false);
        }}
        isError={success}
        msg={errMsg}
      />

      <div className={styles.container}>
        <div className={styles.topBox}>
          <img
            className={styles.img}
            src="/images/settledPage/settled_img.png"
          />
          <span className={styles.tips}>
            提交联系方式，我们会安排服务人员尽快与您
          </span>
          <div className={styles.line} />
        </div>

        <div className={styles.inputBox}>
          <SettledInput
            label="公司名称"
            errorMsg="请输入公司名称"
            placeholder="请输入入驻的企业公司名称"
            changeValue={(val) => {
              setCompany(val);
            }}
          />
          <SettledInput
            label="品牌名称"
            errorMsg="请输入品牌名称"
            placeholder="请输入品牌名称"
            changeValue={(val) => {
              setBrand(val);
            }}
          />
          <SettledInput
            label="手机号"
            errorMsg="请输入手机号"
            placeholder="请填写手机号，以方便联系您"
            changeValue={(val) => {
              setPhone(val);
              if (val.length === 11) {
                setIsDisable(false);
              } else {
                setIsDisable(true);
              }
            }}
          />
          <SettledInput
            label="短信验证码"
            errorMsg="请输入短信验证码"
            placeholder="请输入验证码"
            isCode
            disable={isDisable}
            changeValue={(val) => {
              setCode(val);
            }}
            getCode={() => {
              if (isDisable) {
                handleSendCode();
              }
            }}
          />
          <SettledInput
            label="联系人"
            errorMsg="请输入联系人"
            placeholder="请留下您的名字，可以只留姓氏"
            changeValue={(val) => {
              setContact(val);
            }}
          />
        </div>
        <div
          className={styles.btnBox}
          onPointerUp={() => {
            submit();
          }}
        >
          <span className={styles.title}>提交申请表</span>
        </div>
      </div>

      <FooterComponent showImg />
    </>
  );
}
