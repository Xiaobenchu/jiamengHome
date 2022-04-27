import { applyProject } from '@/services/project';
import { useState } from 'react';
import styles from './styles.module.css';

interface ApplyProjectOverlayProps {
  data: any;
  left?: boolean;
  close: () => void;
}

const msgList = [
  '我对项目很感兴趣，请尽快寄资料给我',
  '请问我所在的地区有加盟商了吗？',
  '我想详细了解加盟流程',
  '加盟该项目能得到哪些支持',
  '我想加盟，请电话联系我',
  '加盟所需要的费用有哪些',
  '项目很好，请尽快联系我详谈',
];

export function ApplyProjectOverlay(props: ApplyProjectOverlayProps) {
  const { data, left, close } = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState(`我想了解${data.name}项目`);

  const [hadShow, setHadShow] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const showErr = (val: string) => {
    setErrMsg(val);
    setHadShow(true);
    setTimeout(() => {
      setHadShow(false);
    }, 1500);
  };

  function submit() {
    if (name === '') {
      showErr('请输入姓名！！');
      return;
      // errTimer();
    }
    // if (code.length < 4 || code === '') {
    //   setLoginError('请输入四位数验证码');
    //   errToggleOverlay();
    //   // errTimer();
    //   return;
    // }
    if (phone.length < 11 || phone === '') {
      showErr('请输入手机号！！');
      return;
    }
    // 申请项目
    try {
      applyProject(data.id, {
        name,
        // gender: sex,
        mobile: phone,
        // code: code,
        msg,
      }).then(() => {
        close();
        setTimeout(() => {
          setName('');
          setPhone('');
        }, 1200);
      });
    } catch (error) {
      console.log('applyProject error');
      // if (error.code === 500) {
      showErr('你已经给该项目留过言了！！');
      setName('');
      setPhone('');

      // }
      // setLoginError('验证码错误或过期');
      // errToggleOverlay();
    }
  }

  return (
    <div>
      <div
        className={styles.box}
        onPointerUp={() => {
          close();
        }}
      >
        {' '}
      </div>
      <div className={styles.main}>
        <div className={styles.imgBox}>
          <span> </span>
          {left ? (
            <img src="/images/home/zi_xun.png" className={styles.img} />
          ) : (
            <img src="/images/home/fang_an.png" className={styles.img} />
          )}
          <img
            src="/images/home/close.png"
            className={styles.close}
            onPointerUp={() => {
              close();
            }}
          />
        </div>
        <div className={styles.contentBox}>
          {hadShow ? <div className={styles.hadApply}>{errMsg}</div> : null}

          <div className={styles.leftBox}>
            <div className={styles.inputBox}>
              <div>
                <span>*</span>姓名:
              </div>
              <input
                placeholder="请输入称呼，如万先生"
                className={styles.input}
                maxLength={12}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={styles.inputBox}>
              <div>
                <span>*</span>手机号:
              </div>
              <input
                maxLength={11}
                placeholder="请输入手机号"
                className={styles.input}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className={styles.inputBox}>
              <div>留言:</div>
              <input
                placeholder="咨询"
                className={styles.input}
                maxLength={150}
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
            </div>
            <div
              className={styles.rightBtn}
              onPointerUp={() => {
                submit();
              }}
            >
              同意并提交
            </div>
            <span className={styles.agree}>
              点击提交代表您同意
              <a href="/userPolicy" className={styles.rightColor}>
                《用户协议》
              </a>
              和
              <a href="/privacyPolicy" className={styles.rightColor}>
                《隐私政策》
              </a>
            </span>
          </div>
          <div className={styles.rightBox}>
            <p className={styles.rightTitle}>你可以根据下列意向选择留言</p>
            {msgList.map((item) => (
              <p
                onPointerUp={() => {
                  setMsg(item);
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
