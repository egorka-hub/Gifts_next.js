import Button from "../Button";
import CircleProgressBar from "@/components/CircleProgressBar";
import Slider from "@/components/Slider";

import styles from "./index.module.scss";

const CONTENT = [
  {
    title: 'Bibendum neque egestas congue',
    text: 'lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat',
    slider: false,
    button: 'Back',
    class: 'swiper-prev-btn-main'
  },
  {
    title: 'PageMaker including versions of Lorem Ipsum.',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ',
    slider: true,
    button: 'Go',
    class: 'swiper-next-btn-main'
  }
]

const Block = ({isFirst}) => {

  const num = isFirst ? 1 : 0

  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{CONTENT[num].title}</h2>
        <p className={styles.text}>{CONTENT[num].text}</p>
        <Button className={CONTENT[num].class} title={CONTENT[num].button} />
      </div>
      {CONTENT[num].slider ? <Slider /> : <CircleProgressBar /> }
    </div>
  );
};

export default Block;
