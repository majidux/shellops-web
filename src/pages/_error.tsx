import { React } from '@utils';
import style from './_error.module.scss';

/** 404 Notfound page will appear when given url isn't available */
function FourOhFour() {
  return (
    <section className={style.error_container_parent}>
      <span>404 Page not found</span>
    </section>
  );
}
export default FourOhFour;
