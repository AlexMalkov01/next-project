
import { H_TAG_VARIANT,
   Htag,
   Button,
   BTN_VARIANT,
   ARROW_SVG_POSITION,
   Paragraph,
   PARAGRAPH_ZIZE,
   Tag,
   TAG_VARIANT,
   TAG_SIZE,
   Rating,
  } from "./components"
import { withLayout } from "./layout/layout";

function Home() {

  return (
   <>
   <Htag tag={H_TAG_VARIANT.h1}>Курсы по Photoshop</Htag>
   <Htag tag={H_TAG_VARIANT.h2}>Вакансии - Photoshop</Htag>
   <Htag tag={H_TAG_VARIANT.h3}>Профессия дизайнер от 0 до PRO</Htag>
   <Htag tag={H_TAG_VARIANT.h4}>Преимущества</Htag>
   <Button variant={BTN_VARIANT.PRIMARY}>Узнать подробнее</Button>
   <Button arrow={ARROW_SVG_POSITION.SVG_RAIGHT} variant={BTN_VARIANT.TRANSPARRENT}>Читать отзывы</Button>
   <Paragraph size={PARAGRAPH_ZIZE.SMALL}>Маленький</Paragraph>
   <Paragraph size={PARAGRAPH_ZIZE.MIDDLE}>Средний</Paragraph>
   <Paragraph size={PARAGRAPH_ZIZE.LARGE}>Большой</Paragraph>
   <Tag size={TAG_SIZE.MIDDLE} variant={TAG_VARIANT.RED} href="https://hh.ru">hh.ru</Tag>
   <Rating isEditable  rating={3}></Rating>
   </>
  );
}
 
export default withLayout(Home)
