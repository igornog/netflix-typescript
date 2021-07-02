import './mid-section.scss';
import './mid-section-mb.scss';

interface Props {
  title: string;
  subtitle: string;
  img: string;
  alt: string;
}

const MidSection = ({ title, subtitle, img, alt }: Props) =>
  <article>
    <div className='img-wrapper'>
      <img src={img} alt={alt} />
    </div>
    <div className='text-wrapper'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </article>

export default MidSection