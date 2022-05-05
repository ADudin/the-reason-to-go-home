import logo from './logo.svg';
import bestsellerPicture from './bestseller-picture-mobile.jpg';
import newArrivlesItemOne from './new-arrivals-item-1-mobile.jpg';
import newArrivlesItemTwo from './new-arrivals-item-2-mobile.jpg';
import newArrivlesItemThree from './new-arrivals-item-3-mobile.jpg';

function MainPage(): JSX.Element {
  return (
    <>
      <header>
        <a href='/'>
          <img src={logo} alt='logo' width='115' height='31'/>
        </a>

        <nav>

          <ul>
            <li>
              <a href='/'>Избранное</a>
            </li>
            <li>
              <a href='/'>Корзина</a>
            </li>
            <li>
              <a href='/'>Профиль</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href='/'>Каталог</a>
            </li>
            <li>
              <a href='/'>Новости</a>
            </li>
            <li>
              <a href='/'>Доставка</a>
            </li>
            <li>
              <a href='/'>О нас</a>
            </li>
            <li>
              <a href='/'>Контакты</a>
            </li>
          </ul>

        </nav>

        <button type="button">
          <span>Открыть меню</span>
        </button>

      </header>

      <section className='bestseller'>

        <h2>Хит продаж</h2>

        <p>Ракушки для украшений</p>

        <img src={bestsellerPicture} alt='bestseller' width='250' height='277'/>

        <p>Цена</p>

        <p>4906 &#8381;</p>

        <button type="button">
          <span>Купить</span>
        </button>

      </section>

      <section className='goodsPreview'>

        <h2>Наша продукция</h2>

        <ul>
          <li>
            <a href='/'>Для сухоцветов</a>
          </li>
          <li>
            <a href='/'>Для украшений</a>
          </li>
          <li>
            <a href='/'>Свечи</a>
          </li>
          <li>
            <a href='/'>Асксессуары из гипса</a>
          </li>
          <li>
            <a href='/'>Индивидуальный заказ</a>
          </li>
          <li>
            <a href='/'>Скидки и предложения</a>
          </li>
        </ul>

      </section>

      <section className='new-arrivals'>

        <h2>Новинки</h2>

        <ul>
          <li>

            <img src={newArrivlesItemOne} alt='bestseller' width='290' height='386'/>

            <p>Ваза для сухоцветов</p>

            <p>1953 &#8381;</p>

          </li>
          <li>

            <img src={newArrivlesItemTwo} alt='bestseller' width='290' height='386'/>

            <p>Кашпо</p>

            <p>5570 &#8381;</p>

          </li>
          <li>

            <img src={newArrivlesItemThree} alt='bestseller' width='290' height='386'/>

            <p>Дистиллятор для эфирных масел</p>

            <p>4906 &#8381;</p>

          </li>
        </ul>

        <div>
          <button type="button" />
          <button type="button" />
          <button type="button" />
        </div>

        <a href='/'>Перейти в каталог</a>

      </section>

      <section className='advantages'>

        <h2>Почему выбирают нас</h2>

        <ul>
          <li>
            <h3>Индивидуальность</h3>
            <p>Уникальные изделия. 100% ручная работа!</p>
          </li>
          <li>
            <h3>Изысканность</h3>
            <p>Наши изделия украсят любой интерьер</p>
          </li>
          <li>
            <h3>Большой опыт</h3>
            <p>Изготовили более 1000 изделий</p>
          </li>
          <li>
            <h3>Широкий асортимент</h3>
            <p>Отличный подарок на любой праздник</p>
          </li>
          <li>
            <h3>Доставка по всей России</h3>
            <p>Мы осуществляем доставку продукции по всей России</p>
          </li>
          <li>
            <h3>Забота об окружающей среде</h3>
            <p>В производстве мы по максимуму используем переработанные материалы</p>
          </li>
        </ul>

      </section>

      <footer>

        <img src={logo} alt='logo' width='175' height='47' />

        <p>© 2022 “The Reason To Go Home” <span>Все права защищенны</span></p>

        <a href='/'>Политика конфиденциальности</a>

        <div>

          <p>Навигация</p>

          <ul>
            <li>
              <a href='/'>Каталог</a>
            </li>
            <li>
              <a href='/'>Новости</a>
            </li>
            <li>
              <a href='/'>Доставка</a>
            </li>
            <li>
              <a href='/'>О нас</a>
            </li>
            <li>
              <a href='/'>Контакты</a>
            </li>
          </ul>

        </div>

        <div>

          <p>Каталог</p>

          <ul>
            <li>
              <a href='/'>Для сухоцветов</a>
            </li>
            <li>
              <a href='/'>Для украшений</a>
            </li>
            <li>
              <a href='/'>Свечи</a>
            </li>
            <li>
              <a href='/'>Асксессуары из гипса</a>
            </li>
            <li>
              <a href='/'>Индивидуальный заказ</a>
            </li>
            <li>
              <a href='/'>Скидки и предложения</a>
            </li>
          </ul>

        </div>

        <div>

          <p>Контакты</p>

          <ul>
            <li>
              <a href='tel:+74951234567'>+7(495)123-45-67</a>
            </li>
            <li>
              <a href='mailto:mail@email.com'>mail@email.com</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href='/'>Телеграмм</a>
            </li>
            <li>
              <a href='/'>Инстаграмм</a>
            </li>
            <li>
              <a href='/'>В контакте</a>
            </li>
          </ul>

        </div>

      </footer>
    </>
  );
}

export default MainPage;
