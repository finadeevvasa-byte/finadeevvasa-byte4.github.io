import React from 'react';
import {
  Layout, Menu, Row, Col, Typography, Table, Form,
  Input, DatePicker, Radio, Checkbox, Select, Button,
} from 'antd';
import dayjs from 'dayjs';
import './App.css';

const { Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const columns = [
    { title: '№', dataIndex: 'key', key: 'key', width: 60 },
    { title: 'ФИО студента', dataIndex: 'name', key: 'name' },
    { title: 'Группа', dataIndex: 'group', key: 'group', width: 110 },
    { title: 'Средний балл', dataIndex: 'score', key: 'score', width: 130 },
  ];

  const data = [
    { key: '1', name: 'Иванов Иван Иванович', group: 'ИН21', score: 4.8 },
    { key: '2', name: 'Петров Пётр Петрович', group: 'ИН21', score: 3.5 },
    { key: '3', name: 'Сидоров Сидор Сидорович', group: 'ИН21', score: 5.0 },
    { key: '4', name: 'Кузнецов Кузьма Кузьмич', group: 'переведён', score: 3.7 },
    { key: '5', name: 'Смирнов Андрей Андреевич', group: 'ИН21', score: 3.5 },
    { key: '6', name: 'Средний балл по потоку', group: '', score: 3.5 },
  ];

  const menuItems = [
    { key: 'list', label: <a href="#list">Список гиперссылок</a> },
    { key: 'table', label: <a href="#table">Таблица</a> },
    { key: 'form', label: <a href="#form">Форма</a> },
  ];

  const onFinish = (values) => {
    console.log('Форма отправлена:', values);
  };

  return (
    <Layout className="app-layout">
      <div className="site-header">
        <div className="header-content">
          <div className="header-top">
            <img src="/logo.png" alt="Логотип" className="logo" />
            <span className="site-title">Финадеев Василий</span>
          </div>
          <Menu
            mode="horizontal"
            items={menuItems}
            className="main-menu"
            selectable={false}
          />
        </div>
      </div>

      <Content className="site-content">
        <Row gutter={[24, 24]}>
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
            <section id="list" className="list-section">
              <Title level={3}>Маркированный список гиперссылок</Title>
              <ul className="links-list">
                <li><a href="http://kubsu.ru">Главная страница сайта КубГУ</a></li>
                <li><a href="https://kubsu.ru">Главная страница сайта КубГУ (протокол https)</a></li>
                <li><a href="http://kubsu.ru"><img src="/image.jpg" alt="Ссылка-изображение" width="200" /></a></li>
                <li><a href="/about">Сокращенная ссылка на внутреннюю страницу</a></li>
                <li><a href="/">Сокращенная ссылка на главную страницу</a></li>
                <li><a href="#form">Ссылка на фрагмент текущей страницы</a></li>
                <li><a href="https://kubsu.ru/?param1=1&amp;param2=2&amp;param3=3">Ссылка с тремя параметрами в URL</a></li>
                <li><a href="https://kubsu.ru/ru/fktipm?id=123">Ссылка с параметром id</a></li>
                <li><a href="page.html">Относительная ссылка в текущем каталоге</a></li>
                <li><a href="about/page.html">Относительная ссылка в каталоге about</a></li>
                <li><a href="../page.html">Относительная ссылка на уровень выше</a></li>
                <li><a href="../../page.html">Относительная ссылка на два уровня выше</a></li>
                <li>
                  <p>
                    Я учусь в <a href="https://kubsu.ru">Кубанском государственном университете</a><br />
                    на <a href="https://kubsu.ru/ru/fktipm">ФКТиПМ</a>. Мне нравится!
                  </p>
                </li>
                <li><a href="https://ru.wikipedia.org/wiki/HTML#История">История HTML (фрагмент стороннего сайта)</a></li>
                <li>
                  <img src="/square_and_circle.jpg" alt="Карта" useMap="#map1" width="400" height="300" />
                  <map name="map1">
                    <area shape="rect" coords="43,53,168,246" href="https://html5book.ru" alt="Прямоугольная область" />
                    <area shape="circle" coords="285,148,73" href="https://htmlbook.ru" alt="Круглая область" />
                  </map>
                </li>
                <li><a href="">Ссылка с пустым href</a></li>
                <li><a>Ссылка без href</a></li>
                <li><a href="https://kubsu.ru" rel="nofollow">Ссылка, запрещённая для перехода поисковикам</a></li>
                <li><a href="https://kubsu.ru" rel="noindex">Ссылка, запрещённая для индексации</a></li>
                <li>
                  <ol>
                    <li><a href="https://kubsu.ru" title="Главная КубГУ">КубГУ</a></li>
                    <li><a href="https://kubsu.ru/ru/fktipm" title="ФКТиПМ">ФКТиПМ</a></li>
                  </ol>
                </li>
                <li><a href="ftp://students:password123@ftp.example.ru/files/lab1.zip">Ссылка на FTP с авторизацией</a></li>
              </ul>
            </section>
          </Col>

          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
            <section id="table" className="table-section">
              <Title level={3}>Таблица</Title>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                size="small"
                scroll={{ x: 'max-content' }}
              />
            </section>
          </Col>
        </Row>

        <section id="form" className="form-section">
          <Title level={3}>Форма</Title>
          <Form layout="vertical" onFinish={onFinish} className="main-form">
            <Form.Item
              label="ФИО"
              name="fio"
              rules={[
                { required: true, message: 'Введите ФИО' },
                { pattern: /^[A-Za-zА-Яа-яЁё\s-]+$/, message: 'Только буквы, пробелы и дефисы' },
              ]}
            >
              <Input placeholder="Фамилия Имя Отчество" />
            </Form.Item>

            <Form.Item
              label="Телефон"
              name="phone"
              rules={[
                { required: true, message: 'Введите номер телефона' },
                { pattern: /^[0-9+\-()\s]+$/, message: 'Только цифры и символы +, -, (, )' },
              ]}
            >
              <Input placeholder="+7 (___) ___-__-__" />
            </Form.Item>

            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: 'Введите e-mail' },
                { type: 'email', message: 'Некорректный e-mail' },
              ]}
            >
              <Input placeholder="example@mail.com" />
            </Form.Item>

            <Form.Item
              label="Дата рождения"
              name="birthdate"
              rules={[{ required: true, message: 'Выберите дату' }]}
            >
              <DatePicker
                style={{ width: '100%' }}
                format="DD.MM.YYYY"
                disabledDate={(current) => current && current > dayjs().endOf('day')}
              />
            </Form.Item>

            <Form.Item label="Пол" name="gender">
              <Radio.Group>
                <Radio value="male">Мужской</Radio>
                <Radio value="female">Женский</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Любимый язык программирования" name="languages">
              <Select
                mode="multiple"
                placeholder="Выберите языки"
                options={[
                  { value: 'cpp', label: 'C++' },
                  { value: 'js', label: 'JavaScript' },
                  { value: 'go', label: 'Golang' },
                  { value: 'python', label: 'Python' },
                  { value: 'java', label: 'Java' },
                  { value: 'php', label: 'PHP' },
                  { value: 'c', label: 'C' },
                  { value: 'pascal', label: 'Pascal' },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Биография"
              name="bio"
              rules={[{ required: true, message: 'Введите биографию' }]}
            >
              <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item
              name="contract"
              valuePropName="checked"
              rules={[{ validator: (_, v) => v ? Promise.resolve() : Promise.reject('Подтвердите ознакомление') }]}
            >
              <Checkbox>С контрактом ознакомлен(а)</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">Сохранить</Button>
            </Form.Item>
          </Form>
        </section>
      </Content>

      <Footer className="site-footer">
        (с) Финадеев Василий, 2026
      </Footer>
    </Layout>
  );
}

export default App;