import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [distance, setDistance] = useState('');
  const [carType, setCarType] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const basePrice = carType === 'sedan' ? 30 : carType === 'suv' ? 40 : 50;
    const dist = parseInt(distance) || 0;
    setCalculatedPrice(basePrice * dist);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-accent" />
            <h1 className="text-2xl font-bold">АвтоТранс</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors">Калькулятор</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#geography" className="text-muted-foreground hover:text-foreground transition-colors">География</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О компании</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Заказать звонок</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Надежная перевозка автомобилей по всей России
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная транспортировка любых типов автомобилей с гарантией сохранности и точными сроками доставки
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (800) 555-35-35
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/68d0eb06-a606-4cc9-8d35-80c610cc0941/files/ba511412-b91e-41c7-b84f-2a51c33cb8ae.jpg" 
                alt="Автовоз с автомобилями" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">лет на рынке</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50000+</div>
              <div className="text-lg">перевезено авто</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">страхование груза</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">поддержка клиентов</div>
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
                <CardDescription>Седаны, хэтчбеки, универсалы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Безопасная транспортировка легковых автомобилей любых марок на крытых и открытых автовозах
                </p>
                <div className="text-2xl font-bold text-accent">от 30 ₽/км</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-accent" />
                </div>
                <CardTitle>Внедорожники</CardTitle>
                <CardDescription>SUV, кроссоверы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Специализированная перевозка крупногабаритных автомобилей с соблюдением всех мер безопасности
                </p>
                <div className="text-2xl font-bold text-accent">от 40 ₽/км</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Gem" size={24} className="text-accent" />
                </div>
                <CardTitle>Премиум класс</CardTitle>
                <CardDescription>Элитные и коллекционные авто</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Индивидуальный подход к транспортировке дорогих автомобилей в закрытых автовозах
                </p>
                <div className="text-2xl font-bold text-accent">от 50 ₽/км</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="geography" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">География работы</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Осуществляем перевозки по всей территории России с филиалами в крупнейших городах
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Москва и МО</div>
                    <div className="text-muted-foreground text-sm">Основной логистический центр</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Санкт-Петербург</div>
                    <div className="text-muted-foreground text-sm">Северо-Западный филиал</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Екатеринбург</div>
                    <div className="text-muted-foreground text-sm">Уральский регион</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Новосибирск</div>
                    <div className="text-muted-foreground text-sm">Сибирский филиал</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Владивосток</div>
                    <div className="text-muted-foreground text-sm">Дальневосточный регион</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Казань</div>
                    <div className="text-muted-foreground text-sm">Приволжский федеральный округ</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Краснодар</div>
                    <div className="text-muted-foreground text-sm">Южный регион</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Ростов-на-Дону</div>
                    <div className="text-muted-foreground text-sm">Юг России</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Нижний Новгород</div>
                    <div className="text-muted-foreground text-sm">Приволжье</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Челябинск</div>
                    <div className="text-muted-foreground text-sm">Урал</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Красноярск</div>
                    <div className="text-muted-foreground text-sm">Центральная Сибирь</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Хабаровск</div>
                    <div className="text-muted-foreground text-sm">Дальний Восток</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/68d0eb06-a606-4cc9-8d35-80c610cc0941/files/9561174f-14c5-4024-a85a-7b217fda17a2.jpg" 
                alt="География перевозок" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              АвтоТранс — это команда профессионалов с 15-летним опытом в сфере автомобильных перевозок. 
              Мы специализируемся на безопасной транспортировке автомобилей любых классов по всей России.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Наш автопарк включает современные автовозы, оснащенные системами безопасной фиксации и GPS-мониторинга. 
              Каждая перевозка застрахована, а клиенты получают полное сопровождение на всех этапах доставки.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Icon name="Shield" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Безопасность</h3>
                <p className="text-muted-foreground">100% страхование каждого груза</p>
              </div>
              <div className="text-center">
                <Icon name="Clock" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Пунктуальность</h3>
                <p className="text-muted-foreground">Точное соблюдение сроков</p>
              </div>
              <div className="text-center">
                <Icon name="Award" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Качество</h3>
                <p className="text-muted-foreground">Проверенные стандарты работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр Петров</CardTitle>
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Перевозили BMW X5 из Москвы в Сочи. Все прошло отлично, автомобиль доставили точно в срок, 
                  без единой царапины. Рекомендую!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Соколова</CardTitle>
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Очень довольна сервисом! Оперативно рассчитали стоимость, забрали машину прямо из дома. 
                  На связи были постоянно. Спасибо!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Волков</CardTitle>
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                      <Icon name="Star" size={16} />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Пользуюсь услугами АвтоТранс уже 3 года. Перевозил более 10 автомобилей для автосалона. 
                  Надежная компания!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Phone" size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-xl">Телефон</h3>
              <p className="text-lg">+7 (800) 555-35-35</p>
              <p className="text-sm opacity-80">Круглосуточно</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-xl">Email</h3>
              <p className="text-lg">info@avtotrans.ru</p>
              <p className="text-sm opacity-80">Ответим в течение часа</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-xl">Адрес</h3>
              <p className="text-lg">Москва, ул. Логистическая, 15</p>
              <p className="text-sm opacity-80">Пн-Вс: 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 АвтоТранс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;