import { curve, heroBackground, robot, robot2 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Form, Modal, Input, InputNumber, Row, Col, Select } from "antd";

const { Option } = Select;

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (selectedItems)=> {
    setSelectedItems(selectedItems);
  }

  const showModal = () => {
    setVisible(true);
  }

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        console.log('Form values:', values);
        setVisible(false);
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const parallaxRef = useRef(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 h1">
            Explore the Possibilities of&nbsp;Digital&nbsp;World with {` `}
            <span className="relative inline-block">
              Chill Tech{" "}
              <img
                src={curve}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            Elevate your digital strategy with Chill Tech. Transform your
            marketing with cutting-edge AI solutions.
          </p>
          <Button onClick={showModal}>
            Get Your free Quote
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img src={robot} width={1024} height={490} alt="AI" />
                {/* <Carousel
                  responsive={responsive}
                  swipeable={true}
                  infinite={true}
                  removeArrowOnDeviceType={[
                    "tablet",
                    "mobile",
                    "superLargeDesktop",
                    "desktop",
                  ]}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                >
                  <div>
                    {" "}
                    <img src={robot} width={1024} height={490} alt="AI" />
                  </div>
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <video src={robot2} width={1024} height={490} alt="AI" autoPlay mute/>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <img src={robot} width={1024} height={490} alt="AI" />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <img src={robot} width={1024} height={490} alt="AI" />
                    </div>
                  </div>
                </Carousel> */}

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Followed You"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />

          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />
      </div>

      <BottomLine />

          <Modal
          title="Get a Free Quote"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="modal-transparent"
        >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          
          <Input />
        </Form.Item>
        <Form.Item
          name="Company name"
          label="Company Name"
          rules={[{ required: true, message: 'Please input your company name!' }]}
        >
          
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { type: 'email', message: 'The input is not valid E-mail!' },
                { required: true, message: 'Please input your E-mail!' }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: 'Please input your phone number!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const phoneNumber = value && value.toString();
                  if (!phoneNumber || phoneNumber.length === 10) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Please enter 10 digits'));
                },
              }),
            ]}
          >
            <InputNumber 
              style={{ width: '100%' }}
              min={0}  // Set minimum value to 0
            />
          </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="selectedItems"
          label="Select Services"
        >
          <Select
            mode="multiple"
            placeholder="Select Services"
            value={selectedItems}
            onChange={handleSelectChange}
          >
            <Option value="item1">Digital Marketing</Option>
            <Option value="item2">Social Media Management</Option>
\          </Select>
        </Form.Item>
        <Form.Item
          name="query"
          label="Tell us about your business"
          rules={[{ required: true, message: 'Please input your query!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>

    </Section>
  );
};

export default Hero;
