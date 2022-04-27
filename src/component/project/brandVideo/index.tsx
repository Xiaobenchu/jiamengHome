// import { useState } from 'react';
import styles from './styles.module.css';

interface BrandVideoProps {
  data: any;
}

export function BrandVideo(props: BrandVideoProps) {
  const { data } = props;

  //   const [show, setShow] = useState(false);

  return (
    <div className={styles.box}>
      {data?.videoList &&
      (data?.videoList[0] || data?.videoList[1] || data?.videoList[2]) ? (
        <div className={styles.BrandVideo}>
          <span>探店视频</span>
          <div className={styles.videoListBox}>
            {data?.videoList[0] ? (
              <div className={styles.videoItemBox}>
                <video
                  src={data.videoList[0]}
                  controls
                  className={styles.video}
                >
                  <track
                    src="/media/examples/friday.vtt"
                    kind="captions"
                    srcLang="en"
                  />
                </video>
                {/* <span>什么视频</span>
                <span>谁谁谁</span> */}
              </div>
            ) : null}
            {data?.videoList[1] ? (
              <div className={styles.videoItemBox}>
                <video
                  src={data.videoList[1]}
                  controls
                  className={styles.video}
                >
                  <track
                    src="/media/examples/friday.vtt"
                    kind="captions"
                    srcLang="en"
                  />
                </video>
                {/* <span>什么视频</span>
                <span>谁谁谁</span> */}
              </div>
            ) : null}
            {data?.videoList[2] ? (
              <div className={styles.videoItemBox}>
                <video
                  src={data.videoList[2]}
                  controls
                  className={styles.video}
                >
                  <track
                    src="/media/examples/friday.vtt"
                    kind="captions"
                    srcLang="en"
                  />
                </video>
                {/* <span>什么视频</span>
                <span>谁谁谁</span> */}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
