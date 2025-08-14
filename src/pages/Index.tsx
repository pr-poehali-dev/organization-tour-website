import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const tours = [
    {
      id: 1,
      title: "Турция",
      description: "Откройте для себя древние города, средиземноморское побережье и богатую культуру Турции",
      price: "200,000 ₽",
      duration: "8 дней",
      difficulty: "Легкая",
      image: "/img/3f423125-1ab4-40e7-b24a-7c86fbc7e0b3.jpg"
    },
    {
      id: 2,
      title: "Дагестан",
      description: "Путешествие по горным селениям и древним крепостям Кавказа",
      price: "90,000 ₽",
      duration: "8 дней",
      difficulty: "Средняя",
      image: "/img/d1f2b6fd-5c70-40ca-a5b8-1d3698a798b7.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Невероятное приключение! Профессиональная команда, потрясающие виды.",
      rating: 5
    },
    {
      name: "Михаил Сидоров",
      text: "Лучший отпуск в моей жизни. Все организовано на высшем уровне.",
      rating: 5
    },
    {
      name: "Екатерина Волкова",
      text: "Рекомендую всем любителям приключений! Незабываемые впечатления.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Что включено в стоимость тура?",
      answer: "В стоимость входит: проживание, питание, трансферы, услуги гида, страховка и все экскурсии по программе."
    },
    {
      question: "Какая физическая подготовка требуется?",
      answer: "Для большинства туров достаточно базовой физической подготовки. Сложные маршруты отмечены соответствующим уровнем сложности."
    },
    {
      question: "Можно ли отменить бронирование?",
      answer: "Да, бронирование можно отменить за 14 дней до начала тура с полным возвратом средств."
    },
    {
      question: "Предоставляете ли вы снаряжение?",
      answer: "Базовое снаряжение предоставляется. Личные вещи (одежда, обувь) нужно брать с собой."
    }
  ];

  const blogPosts = [
    {
      title: "10 советов для горного треккинга",
      excerpt: "Подготовка к походу в горы: что взять с собой и как тренироваться",
      date: "15 августа 2024"
    },
    {
      title: "Лучшие места для наблюдения за северным сиянием",
      excerpt: "Где и когда можно увидеть это природное чудо",
      date: "10 августа 2024"
    },
    {
      title: "Экологичный туризм: как путешествовать ответственно",
      excerpt: "Советы по минимизации воздействия на окружающую среду",
      date: "5 августа 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" size={32} className="text-primary" />
              <h1 className="text-2xl font-medium font-cormorant text-primary">Туда-Сюда, Поехали</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/1048bc51-cee2-4c87-9707-51b9acefcae4.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-medium font-cormorant mb-6 animate-fade-in">
            ПРИКЛЮЧЕНИЯ
            <br />
            <span className="text-primary">ЖДУТ ТЕБЯ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Открой мир невероятных путешествий с нашими эксклюзивными турами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="Send" size={20} className="mr-2" />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium font-cormorant mb-4">Наши Туры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите свое идеальное приключение из нашей коллекции уникальных туров
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {tour.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-cormorant text-xl">{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      {tour.duration}
                    </div>
                    <div className="text-2xl font-bold text-primary font-montserrat">
                      {tour.price}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-medium font-cormorant mb-6">О нашей компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
«Туда-Сюда, Поехали» — это команда профессионалов с 15-летним опытом организации незабываемых путешествий. 
                Мы специализируемся на приключенческом туризме и знаем, как сделать ваше путешествие безопасным и увлекательным.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">25</div>
                  <div className="text-sm text-muted-foreground">Направлений</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">100%</div>
                  <div className="text-sm text-muted-foreground">Безопасность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/45bf2166-3780-493c-afb8-4cb8793634c0.jpg" 
                alt="О компании"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium font-cormorant mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Взгляните на потрясающие моменты наших путешествий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 1, 2, 1, 2].map((index, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={tours[index - 1].image}
                  alt={`Галерея ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium font-cormorant mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят наши клиенты о путешествиях с нами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-medium font-cormorant text-lg">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium font-cormorant mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">
              Полезные советы и вдохновляющие истории о путешествиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="font-cormorant text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium font-cormorant mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые популярные вопросы о наших турах
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-cormorant text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium font-cormorant mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для бронирования тура или получения консультации
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold font-montserrat mb-2">Адрес</h3>
                  <p className="г москва
">г. Мытищи
Тенистый бульвар, 19</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold font-montserrat mb-2">Телефон</h3>
                  <p className="">+7 (995) 887-08-07</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold font-montserrat mb-2">Email</h3>
                  <p className="">
                    info@adventure-tours.ru<br />
                    booking@adventure-tours.ru
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold font-montserrat mb-2">Время работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 19:00<br />
                    Сб-Вс: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant text-xl">Быстрая связь</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Имя</label>
                  <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium">Интересующий тур</label>
                  <select className="">
                    <option>Выберите тур</option>
                    <option>Горные Приключения</option>
                    <option>Тропический Рай</option>
                    <option>Северное Сияние</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" size={32} className="text-primary" />
                <h3 className="text-xl font-medium font-cormorant">Туда-Сюда, Поехали</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Ваш надежный партнер в мире приключенческого туризма
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-primary cursor-pointer" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-primary cursor-pointer" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-primary cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold font-montserrat mb-4">Туры</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary">Горные походы</a></li>
                <li><a href="#" className="hover:text-primary">Пляжный отдых</a></li>
                <li><a href="#" className="hover:text-primary">Северное сияние</a></li>
                <li><a href="#" className="hover:text-primary">Экскурсионные туры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-montserrat mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-primary">О нас</a></li>
                <li><a href="#" className="hover:text-primary">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-montserrat mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="#" className="hover:text-primary">Условия бронирования</a></li>
                <li><a href="#" className="hover:text-primary">Страхование</a></li>
                <li><a href="#" className="hover:text-primary">Помощь</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 «Туда-Сюда, Поехали». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}