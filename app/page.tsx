"use client";

import { useState } from "react";
import { sendToTelegram } from "./actions";
import Image from "next/image";

const services = [
  {
    tag: "Старт",
    title: "Лендинг",
    price: "от 500$",
    description:
      "Одностраничный сайт, который превращает трафик в заявки. Идеален для запуска продукта или услуги.",
    features: [
      "Уникальный дизайн под ваш бренд",
      "Адаптив под все устройства",
      "Форма заявки и аналитика",
      "SEO-основа и быстрая загрузка",
    ],
    highlighted: false,
  },
  {
    tag: "Популярный",
    title: "Корпоративный сайт",
    price: "от 1 000$",
    description:
      "Многостраничный сайт компании с премиальной подачей. Вызывает доверие и продаёт вашу экспертизу.",
    features: [
      "До 10 страниц с продуманной структурой",
      "CMS для самостоятельного редактирования",
      "Блог, портфолио, команда",
      "Интеграции: CRM, мессенджеры, почта",
    ],
    highlighted: true,
  },
  {
    tag: "Масштаб",
    title: "Интернет-магазин",
    price: "от 2 000$",
    description:
      "Полноценная e-commerce платформа с удобной покупкой и управлением каталогом.",
    features: [
      "Каталог, корзина, оплата онлайн",
      "Личный кабинет покупателя",
      "Фильтры, поиск, промокоды",
      "Админ-панель и отчёты по продажам",
    ],
    highlighted: false,
  },
];

const stats = [
  { value: "7–21 день", label: "средний срок запуска" },
  { value: "100% адаптация", label: "все устройства" },
  { value: "24 часа", label: "ответ на заявку" },
  { value: "1 человек", label: "персональное сопровождение проекта" },
];

const advantages = [
  {
    number: "01",
    title: "Быстрый запуск",
    features: [
      "Запуск проекта за 7–21 день",
      "Адаптация под все устройства",
      "Подключение Telegram и аналитики",
      "Публикация сайта в интернете",
    ],
  },
  {
    number: "02",
    title: "Современные технологии",
    features: [
      "Next.js",
      "TypeScript",
      "Высокая скорость загрузки",
      "SEO-оптимизация",
    ],
  },
  {
    number: "03",
    title: "Фокус на продажах",
    features: [
      "Продуманная структура",
      "Сильные призывы к действию",
      "Простая подача информации",
      "Увеличение количества заявок",
    ],
  },
];

const projects = [
  {
    category: "Спорт",
    title: "Сайт для фитнес-клуба",
    description:
      "Лендинг с расписанием тренировок, ценами на абонементы и онлайн-записью. Акцент на энергию и мотивацию.",
    result: "Заявки на пробное занятие прямо с сайта",
  },
  {
    category: "HoReCa",
    title: "Сайт для ресторана",
    description:
      "Атмосферный сайт с меню, галереей блюд и бронированием столиков. Премиальная подача под стиль заведения.",
    result: "Бронь столика в два клика",
  },
  {
    category: "E-commerce",
    title: "Интернет-магазин одежды",
    description:
      "Каталог с фильтрами, корзиной и онлайн-оплатой. Чистый минималистичный дизайн, который не отвлекает от товара.",
    result: "Полный цикл покупки без менеджера",
  },
];

const testimonials = [
  {
    quote:
      "Лендинг помогает быстро показать услугу, собрать заявки и объяснить клиенту ценность предложения без лишней информации.",
    name: "Фитнес-проект",
    role: "Пример кейса",
  },
  {
    quote:
      "Сайт для ресторана должен передавать атмосферу заведения, показывать меню и упрощать бронирование столика.",
    name: "HoReCa проект",
    role: "Пример кейса",
  },
  {
    quote:
      "Интернет-магазин должен быть быстрым, понятным и вести клиента от выбора товара до покупки без лишних шагов.",
    name: "E-commerce проект",
    role: "Пример кейса",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-gold-dark"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.92 6.26 6.87.84-5.07 4.7 1.33 6.78L12 17.27l-6.05 3.31 1.33-6.78-5.07-4.7 6.87-.84L12 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 text-gold-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 text-gold-dark transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

const navLinks = [
  { href: "#обо-мне", label: "Обо мне" },
  { href: "#услуги", label: "Услуги" },
  { href: "#портфолио", label: "Портфолио" },
  { href: "#преимущества", label: "Преимущества" },
  { href: "#отзывы", label: "Отзывы" },
  { href: "#контакт", label: "Контакты" },
];

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setStatus({ type: "error", message: "Заполните имя и телефон" });
      return;
    }

    setSending(true);
    setStatus(null);

    const result = await sendToTelegram(name, phone);

    setSending(false);

    if (result.ok) {
      setStatus({
        type: "success",
        message: "Спасибо! Заявка отправлена — свяжусь с вами в течение дня.",
      });
      setName("");
      setPhone("");
    } else {
      setStatus({ type: "error", message: result.error });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      {/* Fixed navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap"
          >
            Premium <span className="gold-gradient-text italic">Web Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-[0.12em] uppercase text-muted hover:text-gold-dark transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#контакт"
            className="btn-gold hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide whitespace-nowrap"
          >
            Обсудить проект
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Silk ribbons, rings and spheres — like the artwork */}
        <div className="silk-ribbon w-[55rem] h-40 -top-10 -right-64 opacity-80" />
        <div className="silk-ribbon w-[40rem] h-28 top-72 -left-72 opacity-60 rotate-[8deg]" />
        <div className="gold-ring w-[28rem] h-[28rem] -top-24 right-[-6rem] hidden lg:block" />
        <div className="gold-ring w-40 h-40 top-80 right-[26rem] hidden xl:block opacity-70" />
        <div className="gold-sphere w-10 h-10 top-32 right-32 hidden md:block" />
        <div className="gold-sphere w-5 h-5 top-[26rem] right-[30rem] hidden xl:block" />
        <div className="gold-sphere w-3.5 h-3.5 top-16 left-[55%] hidden lg:block" />
        <div className="gold-line w-[36rem] top-44 right-[-4rem] rotate-[-18deg] hidden lg:block" />

        <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-20 md:pt-10 md:pb-28">
          <p className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-5 font-medium">
            Bogdan Web Studio
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 max-w-3xl">
            Сайты, которые{" "}
            <span className="gold-gradient-text italic">продают</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-9 font-light">
            Создаю премиальные веб-решения для бизнеса: лендинги, корпоративные
            сайты и интернет-магазины. Дизайн уровня премиальных брендов — с
            измеримым результатом в заявках и продажах.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#услуги"
              className="btn-gold inline-flex items-center justify-center px-10 py-4 rounded-sm font-semibold tracking-wide"
            >
              Смотреть услуги
            </a>
            <a
              href="#контакт"
              className="inline-flex items-center justify-center gold-border bg-surface/60 text-foreground px-10 py-4 rounded-sm font-medium tracking-wide hover:border-gold hover:text-gold-dark transition-all duration-300"
            >
              Бесплатная консультация
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="обо-мне"
        className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
      >
        <div className="gold-sphere w-5 h-5 top-12 right-6 hidden lg:block" />
        <div className="gold-line w-64 top-24 left-[-6rem] rotate-[-18deg] hidden lg:block" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="gold-ring w-36 h-36 -bottom-10 -right-10 hidden lg:block opacity-60" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(42,34,24,0.12),0_6px_20px_rgba(201,163,92,0.18)]">
              <Image
                src="/bogdan.png"
                alt="Богдан Кравчук"
                fill
                sizes="(max-width: 768px) 100vw, 28rem"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-4">
              Обо мне
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-7">
              Помогаю бизнесу получать клиентов через современные сайты
            </h2>

            <div className="font-body text-muted text-lg leading-relaxed font-light mb-8 space-y-4">
              <p>
                Меня зовут Богдан. Я создаю современные сайты, которые помогают
                бизнесу привлекать клиентов, повышать доверие и выделяться среди
                конкурентов.
              </p>
              <p>
                Работаю быстро, погружаюсь в задачи клиента и сопровождаю проект
                от идеи до запуска.
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {[
                "Индивидуальный подход",
                "Быстрая реализация",
                "Современные технологии",
                "Поддержка после запуска",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#контакт"
              className="btn-gold inline-flex items-center justify-center px-10 py-4 rounded-sm font-semibold tracking-wide"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <div className="gold-sphere w-4 h-4 top-4 right-8 hidden lg:block" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <article
              key={item.value}
              className="card-luxury relative rounded-sm p-6 md:p-8 text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

              <p className="font-display text-2xl md:text-3xl font-semibold gold-gradient-text leading-tight mb-3">
                {item.value}
              </p>
              <p className="text-muted text-xs md:text-sm tracking-[0.08em] uppercase font-light leading-relaxed">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>

      {/* Services */}
      <section
        id="услуги"
        className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
      >
        <div className="gold-sphere w-6 h-6 top-24 left-0 hidden lg:block" />
        <div className="gold-ring w-56 h-56 -bottom-10 -right-28 hidden lg:block opacity-60" />

        <div className="text-center mb-14 md:mb-18">
          <p className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-4">
            Услуги
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Выберите формат
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto font-light">
            Три пакета под разные задачи бизнеса. Прозрачные цены, фиксированный
            объём работ и гарантия результата.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className={`card-luxury relative flex flex-col rounded-sm p-8 md:p-10 ${
                service.highlighted ? "lg:scale-105 z-10 !border-gold/50" : ""
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}

              <span
                className={`inline-block self-start text-xs tracking-[0.2em] uppercase px-3 py-1 mb-6 ${
                  service.highlighted
                    ? "bg-gold/15 text-gold-dark border border-gold/40"
                    : "text-muted border border-foreground/10"
                }`}
              >
                {service.tag}
              </span>

              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="font-display text-2xl gold-gradient-text font-medium mb-6">
                {service.price}
              </p>

              <p className="text-muted text-sm leading-relaxed mb-8 font-light">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#контакт"
                className={`inline-flex items-center justify-center py-3.5 rounded-sm text-sm font-semibold tracking-wide ${
                  service.highlighted
                    ? "btn-gold"
                    : "gold-border text-foreground hover:border-gold hover:text-gold-dark transition-all duration-300"
                }`}
              >
                Обсудить проект
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="портфолио"
        className="relative bg-surface-soft/50 border-y border-gold/20 overflow-hidden"
      >
        <div className="silk-ribbon w-[45rem] h-32 -bottom-16 -right-72 opacity-50 rotate-[6deg]" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-4">
              Портфолио
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Последние{" "}
              <span className="gold-gradient-text italic">проекты</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto font-light">
              Каждый проект — продуманная структура, аккуратный дизайн и фокус
              на задаче клиента.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="card-luxury group flex flex-col rounded-sm overflow-hidden"
              >
                <div className="relative h-44 bg-gradient-to-br from-[#efe4cb] via-[#e7d5ab] to-[#d4b97f] flex items-center justify-center overflow-hidden">
                  <div className="gold-ring w-32 h-32 -top-8 -right-8 opacity-50" />
                  <div className="gold-sphere w-4 h-4 bottom-6 left-7" />
                  <span className="font-display text-4xl gold-gradient-text italic select-none">
                    {project.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-dark/50 to-transparent" />
                </div>

                <div className="flex flex-col flex-1 p-7">
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm font-medium text-gold-dark">
                    <ArrowIcon />
                    <span>{project.result}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section
        id="преимущества"
        className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
      >
        <div className="gold-sphere w-8 h-8 top-16 right-4 hidden lg:block" />
        <div className="gold-line w-72 top-10 left-[-6rem] rotate-[24deg] hidden lg:block" />

        <div className="mb-16 max-w-3xl mx-auto text-center">
          <p className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-4">
            Преимущества
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Почему клиенты{" "}
            <span className="gold-gradient-text italic">возвращаются</span>
          </h2>
          <p className="text-muted text-lg font-light leading-relaxed">
            Работаю как партнёр, а не подрядчик: погружаюсь в ваш бизнес,
            предлагаю решения и довожу проект до результата, который можно
            измерить в деньгах.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {advantages.map((item) => (
            <div key={item.number} className="group">
              <span className="font-display text-5xl gold-gradient-text font-light mb-4 block opacity-70 group-hover:opacity-100 transition-opacity">
                {item.number}
              </span>
              <h3 className="font-display text-2xl font-semibold mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2.5 mt-4">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="отзывы"
        className="relative bg-surface-soft/50 border-y border-gold/20 overflow-hidden"
      >
        <div className="gold-ring w-64 h-64 -top-24 -left-32 hidden lg:block opacity-50" />
        <div className="gold-sphere w-5 h-5 bottom-16 right-10 hidden lg:block" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-gold-dark text-sm tracking-[0.3em] uppercase mb-4">
              Отзывы
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Что говорят{" "}
              <span className="gold-gradient-text italic">клиенты</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto font-light">
              Лучшая оценка работы — результат клиентов и их рекомендации.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="card-luxury flex flex-col rounded-sm p-8 md:p-9"
              >
                <span
                  className="font-display text-6xl leading-none gold-gradient-text select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="text-foreground/80 text-sm leading-relaxed font-light mt-3 mb-8 flex-1">
                  {item.quote}
                </blockquote>

                <div className="h-px w-12 bg-gradient-to-r from-gold to-transparent mb-6" />

                <figcaption>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="font-display text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="text-muted text-xs tracking-[0.15em] uppercase mt-1">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="контакт"
        className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32"
      >
        <div className="relative text-center card-luxury rounded-sm p-12 md:p-20 overflow-hidden">
          <div className="silk-ribbon w-[36rem] h-24 -top-10 -left-48 opacity-50" />
          <div className="gold-ring w-48 h-48 -bottom-16 -right-16 opacity-60" />
          <div className="gold-sphere w-6 h-6 bottom-10 left-12 hidden md:block" />

          <p className="relative text-gold-dark text-sm tracking-[0.3em] uppercase mb-6">
            Начнём сегодня
          </p>

          <h2 className="relative font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Готовы к сайту{" "}
            <span className="gold-gradient-text italic">нового уровня</span>?
          </h2>

          <p className="relative text-muted text-lg max-w-lg mx-auto mb-10 font-light">
            Оставьте заявку — обсудим задачу, подберём формат и назовём точную
            стоимость в течение 24 часов.
          </p>

          <form className="relative max-w-xl mx-auto grid gap-4">
          <input
  type="text"
  placeholder="Ваше имя"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full px-5 py-4 rounded-sm border border-gold/30 bg-white/70 text-foreground outline-none focus:border-gold"
/>

<input
  type="tel"
  placeholder="Ваш телефон"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full px-5 py-4 rounded-sm border border-gold/30 bg-white/70 text-foreground outline-none focus:border-gold"
/>

  <button
    type="button"
    onClick={handleSubmit}
    disabled={sending}
    className="btn-gold px-12 py-4 rounded-sm font-semibold tracking-wide text-lg disabled:opacity-60 disabled:pointer-events-none"
  >
    {sending ? "Отправляю..." : "Получить консультацию"}
  </button>

  {status && (
    <p
      className={`text-sm font-medium ${
        status.type === "success" ? "text-gold-dark" : "text-red-700"
      }`}
    >
      {status.message}
    </p>
  )}
</form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-muted text-sm">
          <span className="font-display text-lg text-foreground/80">
            Premium Web Studio
          </span>
          <span>© {new Date().getFullYear()} — Создание сайтов под ключ</span>
        </div>
      </footer>
    </main>
  );
}
