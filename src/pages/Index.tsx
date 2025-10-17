import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [carType, setCarType] = useState('sedan');
  const [distance, setDistance] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const dist = parseInt(distance);
    if (!dist || dist <= 0) return;

    let baseRate = 0;
    switch (carType) {
      case 'sedan':
        baseRate = 25;
        break;
      case 'suv':
        baseRate = 32;
        break;
      case 'premium':
        baseRate = 45;
        break;
    }

    const price = Math.round(dist * baseRate);
    setCalculatedPrice(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={28} className="text-accent" />
            <span className="text-xl font-bold">АвтоТранс</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#calculator" className="text-sm font-medium hover:text-accent transition-colors">
              Калькулятор
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Услуги
            </a>
            <a href="#geography" className="text-sm font-medium hover:text-accent transition-colors">
              География
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              О компании
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-accent transition-colors">
              Отзывы
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
          <Button>
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Перевозка автомобилей по России
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Безопасная доставка вашего автомобиля в любую точку страны. Работаем с 2010 года, перевезли более 50 000 автомобилей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Рассчитайте примерную стоимость перевозки вашего автомобиля
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Быстрый расчет</CardTitle>
                <CardDescription>Заполните данные для получения предварительной стоимости</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="carType">Тип автомобиля</Label>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger id="carType">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Легковой (седан, хэтчбек)</SelectItem>
                      <SelectItem value="suv">Внедорожник (SUV, кроссовер)</SelectItem>
                      <SelectItem value="premium">Премиум класс</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="distance">Расстояние (км)</Label>
                  <Input 
                    id="distance" 
                    type="number" 
                    placeholder="Введите расстояние" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </div>

                <Button className="w-full" size="lg" onClick={calculatePrice}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice !== null && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center animate-fade-in">
                    <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                    <div className="text-4xl font-bold text-accent">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                    <div className="text-sm text-muted-foreground mt-2">Точная цена рассчитывается индивидуально</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг по перевозке автомобилей
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Car" size={24} className="text-accent" />
                </div>
                <CardTitle>Легковые автомобили</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Перевозка легковых автомобилей любых марок на автовозах с полной страховкой
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-accent" />
                </div>
                <CardTitle>Внедорожники</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Специальное оборудование для перевозки внедорожников и кроссоверов любых размеров
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Star" size={24} className="text-accent" />
                </div>
                <CardTitle>Премиум авто</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Закрытые автовозы для перевозки премиальных и коллекционных автомобилей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="geography" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">География перевозок</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы работаем по всей России. Наши автовозы регулярно курсируют между крупнейшими городами страны.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Москва',
                  'Санкт-Петербург',
                  'Новосибирск',
                  'Екатеринбург',
                  'Казань',
                  'Нижний Новгород',
                  'Челябинск',
                  'Самара',
                  'Ростов-на-Дону',
                  'Уфа',
                  'Красноярск',
                  'Воронеж'
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <Icon name="MapPin" size={18} className="text-accent flex-shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6">
                + доставка в любой другой город России
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop" 
                alt="География перевозок" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-accent mb-2" />
                  <CardTitle>Полная страховка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Каждая перевозка застрахована на полную стоимость автомобиля
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Clock" size={32} className="text-accent mb-2" />
                  <CardTitle>Точные сроки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Строго соблюдаем договорные сроки доставки
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Users" size={32} className="text-accent mb-2" />
                  <CardTitle>Опытные водители</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Водители со стажем более 10 лет и безупречной репутацией
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="FileText" size={32} className="text-accent mb-2" />
                  <CardTitle>Полный пакет документов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Оформляем все необходимые документы для перевозки
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Алексей М.</CardTitle>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon key={i} name="Star" size={14} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Перевозили BMW из Москвы в Екатеринбург. Все четко, в срок, авто доставили в идеальном состоянии. Рекомендую!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Марина К.</CardTitle>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon key={i} name="Star" size={14} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Отличный сервис! Помогли с оформлением документов, постоянно на связи. Машину доставили без единой царапины.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Дмитрий С.</CardTitle>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon key={i} name="Star" size={14} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Уже третий раз пользуюсь услугами компании. Цены адекватные, сроки соблюдают. Профессионалы своего дела!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Готовы ответить на все ваши вопросы и рассчитать точную стоимость перевозки
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Телефон</div>
                      <a href="tel:+79991234567" className="text-accent hover:underline">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@avtotrans.ru" className="text-accent hover:underline">
                        info@avtotrans.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Режим работы</div>
                      <div className="text-muted-foreground">Ежедневно с 8:00 до 22:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={24} className="text-accent" />
                <span className="text-lg font-bold">АвтоТранс</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надежная перевозка автомобилей по России с 2010 года
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <div className="space-y-2 text-sm">
                <a href="#services" className="block text-muted-foreground hover:text-accent transition-colors">
                  Услуги
                </a>
                <a href="#geography" className="block text-muted-foreground hover:text-accent transition-colors">
                  География
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-accent transition-colors">
                  О компании
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                  Контакты
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>+7 (999) 123-45-67</div>
                <div>info@avtotrans.ru</div>
                <div>Работаем ежедневно 8:00 - 22:00</div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 АвтоТранс. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
