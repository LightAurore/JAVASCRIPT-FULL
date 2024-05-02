
import { useTranslation } from 'react-i18next';
import style from './rubric.module.css'


const CategoryRubric = () => {

  const { t } = useTranslation();



  return (
    <>
      <ul className={style["rubric-nav"]}>
        <li><a href="#">{t('news.local')}</a></li>
        <li><a href="#">{t('news.regional')}</a></li>
        <li><a href="#">{t('news.national')}</a></li>
        <li><a href="#">{t('news.international')}</a></li>
      </ul>
    </>
  )
}

export default CategoryRubric;